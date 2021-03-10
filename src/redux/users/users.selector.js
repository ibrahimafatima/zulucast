import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectUsers = createSelector([selectUser], (user) => user.users);

export const selectLoadingStatus = createSelector(
  [selectUser],
  (user) => user.isLoading
);
