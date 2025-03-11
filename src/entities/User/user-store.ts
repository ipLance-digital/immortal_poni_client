import { Auth } from '@/shared/api';
import { RequestsStateStore } from '@/shared/store/requests-state-store';
import { flow, types } from 'mobx-state-tree';

export const UserStore = types
  .model('User', {
    status: types.optional(RequestsStateStore, {}),

    id: types.optional(types.identifier, ''),
    isAuth: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    getInfo: flow(function* () {
      try {
        self.status.loadingState();
        const response = yield Auth.authMe();
        self.isAuth = true;
        self.status.successState();

        return response;
      } catch (error) {
        console.error(error);
        self.status.errorState();

        throw error;
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
