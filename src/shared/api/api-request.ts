import { ZodSchema } from 'zod';

const BASE_URL = 'api/v1';

type ApiFetchOptions<T> = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers?: HeadersInit;
  body?: unknown;
  schema?: ZodSchema<T>;
  signal?: AbortSignal;
};

type ApiErrorData = {
  detail?: string;
  [key: string]: unknown;
};

export const apiFetch = async <T = unknown>(
  url: string,
  options: ApiFetchOptions<T>
): Promise<T> => {
  const { method = 'GET', headers = {}, body, schema, signal } = options;
  let csrftoken: string | undefined;

  if (typeof window !== 'undefined') {
    csrftoken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrf_token='))
      ?.split('=')[1];
  } else {
    const { cookies } = await import('next/headers');
    csrftoken = (await cookies()).get('csrftoken')?.value;
  }

  const response = await fetch(`/${BASE_URL}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...(csrftoken ? { 'X-CSRF-TOKEN': csrftoken } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
    signal,
  });

  const text = await response.text();
  let json: unknown;

  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Сервер вернул не JSON: ${text || 'Пустой ответ'}`);
  }

  if (!response.ok) {
    const err = json as ApiErrorData;
    const message = err?.detail || `Ошибка ${response.status}`;

    throw new Error(message);
  }

  if (schema) {
    const result = schema.safeParse(json);

    if (!result.success) {
      console.error('Ошибка валидации данных:', result.error);
      throw new Error('Невалидный ответ от сервера');
    }

    return result.data;
  }

  return json as T;
};
