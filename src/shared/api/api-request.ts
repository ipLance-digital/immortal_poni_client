const BASE_URL = '/api/v1/';

export class ApiError extends Error {
  public status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public data: any;

  constructor(public response: Response, message?: string) {
    super(message || `ApiError: ${response.status}`);
    this.status = response.status;
    this.name = 'ApiError';

    this.parseResponse();
  }

  private async parseResponse() {
    try {
      this.data = await this.response.json();
    } catch {
      this.data = null;
    }
  }

  getErrorMessage(): string {
    return this.data.detail || this.message;
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

  try {
    const response = await fetch(`${BASE_URL}${url}`, { ...init, headers });

    if (!response.ok) {
      throw new ApiError(response);
    }

    const data = (await response.json()) as Promise<T>;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Неизвестная ошибка');
  }
};
