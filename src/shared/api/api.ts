import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: '/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface IApiRequest {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: unknown;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

export const apiRequest = async <T>({
  url,
  method,
  body,
  signal,
  headers,
}: IApiRequest): Promise<T> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: body,
    signal,
    headers: headers ? new AxiosHeaders(headers) : undefined,
  };
  const response = await apiInstance.request<T>(config);

  return response.data;
};
