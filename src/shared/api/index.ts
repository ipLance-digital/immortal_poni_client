import { Auth } from './auth/auth.api';

export * from './query-client';
export * from './api-fetch';

export const API = {
  auth: Auth,
};

export type {
  UserDTO,
  LoginDTO,
  SignupDTO as RegisterDTO,
} from './auth/auth.types';
