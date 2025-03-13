const BASE_URL = '/api/v1/';

class ApiError extends Error {
  constructor(public response: Response) {
    super('ApiError: ' + response.status);
  }
}

export const ApiRequest = async <T>(url: string, init?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${url}`, init);

  if (!response.ok) {
    throw new ApiError(response);
  }

  const data = (await response.json()) as Promise<T>;

  return data;
};
