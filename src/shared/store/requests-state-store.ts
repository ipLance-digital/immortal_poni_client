import { types } from 'mobx-state-tree';

export const RequestsStateStore = types
  .model('RequestsStateStore', {
    pending: types.optional(types.boolean, false),
    fulfilled: types.optional(types.boolean, false),
    error: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    loadingState: () => {
      self.pending = true;
      self.fulfilled = false;
      self.error = false;
    },
    successState: () => {
      self.pending = false;
      self.fulfilled = true;
      self.error = false;
    },
    errorState: () => {
      self.pending = false;
      self.fulfilled = false;
      self.error = true;
    },
  }));
