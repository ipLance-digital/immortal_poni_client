const BASE_URL = '/api/v1/';

class ApiError extends Error {
  constructor(public response: Response) {
    super('ApiError: ' + response.status);
  }
}

export const ApiRequest = async <T>(url: string, init?: RequestInit) => {
  let csrftoken: string | undefined;

  // Проверка, если выполняется на клиенте
  if (typeof window !== 'undefined') {
    csrftoken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrf_token='))
      ?.split('=')[1];
  } else {
    // Серверный контекст, если есть доступ к cookies через заголовки
    const { cookies } = await import('next/headers');
    csrftoken = (await cookies()).get('csrftoken')?.value;
  }

  let headers = { ...init?.headers };

  if (csrftoken) {
    headers = {
      ...headers,
      'X-CSRF-TOKEN': csrftoken,
    };
  }

  const response = await fetch(`${BASE_URL}${url}`, { ...init, headers });

  if (!response.ok) {
    throw new ApiError(response);
  }

  const data = (await response.json()) as Promise<T>;

  return data;
};
