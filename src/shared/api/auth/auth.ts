import { apiRequest } from '../api';

interface ILogin {
  username: string;
  password: string;
}

export const Auth = {
  authMe: () =>
    apiRequest({
      url: 'auth/me',
      method: 'GET',
    }),
  login: (body: ILogin) =>
    apiRequest({
      url: 'auth/login',
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }),
  logout: () =>
    apiRequest({
      url: 'auth/logout',
      method: 'POST',
    }),
};
