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

export const selectAllMovies = createSelector([selectMovies], (movies) =>
  movies.allMovies.filter((m) => !m.isBanner)
);

export const selectBannerMovie = createSelector([selectMovies], (movies) =>
  movies.allMovies.filter((m) => m.isBanner)
);

export const selectLongevity = createSelector(
  [selectMovies],
  (movies) => movies.longevity
);

export const selectOrders = createSelector(
  [selectMovies],
  (movies) =>
    movies.orders
      .filter(
        (order) => new Date(order.expiryDate).getTime() > new Date().getTime()
      )
      .filter(
        (o) => new Date(o.movieExpiresOn).getTime() > new Date().getTime()
      )
  //new Date(order.expiryDate).getTime() > new Date().getTime()
);
