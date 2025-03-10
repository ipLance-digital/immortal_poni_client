import { Auth } from '@/shared/api';
import { flow, types } from 'mobx-state-tree';

export const UserStore = types
  .model('User', {
    id: types.optional(types.identifier, ''),

    isAuth: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    getInfo: flow(function* () {
      try {
        return yield Auth.authMe();
      } catch (error) {
        console.error(error);
      }
    }),
    login: flow(function* ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) {
      try {
        const response = yield Auth.login({ username, password });
        self.isAuth = true;

        return response;
      } catch (error) {
        console.error(error);
      }
    }),
    logout: flow(function* () {
      try {
        return yield Auth.logout();
      } catch (error) {
        console.error(error);
      }
    }),
  }));
