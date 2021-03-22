import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectLoadingStatus = createSelector(
  [selectMovies],
  (movies) => movies.isLoading
);

export const selectVertualMovies = createSelector(
  [selectMovies],
  (movies) => movies.vertualMovies
);

export const selectAllMovies = createSelector(
  [selectMovies],
  (movies) => movies.allMovies
);
