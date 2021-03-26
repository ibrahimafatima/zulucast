import { createSelector } from "reselect";

export const selectUser = (state) => state.users;

export const selectUsers = createSelector([selectUser], (user) => user.users);

export const selectLoadingStatus = createSelector(
  [selectUser],
  (user) => user.isLoading
);
