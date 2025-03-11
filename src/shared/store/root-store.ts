import { types } from 'mobx-state-tree';
import { UserStore } from '@/entities/user';

export const RootStore = types.model('RootStore', {
  user: types.optional(UserStore, {}),
});

export const store = RootStore.create({});
