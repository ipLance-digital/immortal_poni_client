import { ZodSchema } from 'zod';
import { getCookies, safeJSONParse } from '@/shared/lib/utils';
import { Auth } from './auth/auth.api';

const BASE_URL = 'api/v1';

type ApiFetchOptions<T, B = unknown> = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers?: HeadersInit;
  body?: B;
  bodySchema?: ZodSchema<B>;
  schema?: ZodSchema<T>;
  signal?: AbortSignal;
  retry?: boolean;
};

type ApiErrorData = {
  detail?: string;
  [key: string]: unknown;
};

export const apiFetch = async <T = unknown>(
  url: string,
  options: ApiFetchOptions<T>
): Promise<T> => {
  const {
    method = 'GET',
    headers = {},
    body,
    bodySchema,
    schema,
    signal,
    retry = true,
  } = options;
  const csrftoken = await getCookies('csrf_token');
  const accessToken = await getCookies('access_token');

  if (bodySchema && body) {
    const validation = bodySchema.safeParse(body);

    if (!validation.success) {
      console.error('Невалидное тело запроса:', validation.error);
      throw new Error('Некорректные данные для запроса');
    }
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
  const json = safeJSONParse(text);

  if (!response.ok) {
    const error = json as ApiErrorData;

    if (response.status === 401 && retry && accessToken) {
      const refreshed = await Auth.refresh();

      if (refreshed) {
        return apiFetch(url, { ...options, retry: false });
      }
    }

    throw new Error(error.detail || `Ошибка ${response.status}`);
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
