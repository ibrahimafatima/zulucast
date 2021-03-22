import { createSelector } from "reselect";

const selectGenres = (state) => state.genres;

export const selectLoadingStatus = createSelector(
  [selectGenres],
  (genres) => genres.isLoading
);

export const selectVertualGenres = createSelector(
  [selectGenres],
  (genres) => genres.virtualGenres
);

export const selectAllGenres = createSelector(
  [selectGenres],
  (genres) => genres.allGenres
);
