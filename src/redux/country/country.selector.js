import { createSelector } from "reselect";

const selectCountries = (state) => state.country;

export const selectLoadingStatus = createSelector(
  [selectCountries],
  (country) => country.isLoading
);

export const selectVertualCountries = createSelector(
  [selectCountries],
  (country) => country.virtualCountries
);

export const selectAllCountries = createSelector(
  [selectCountries],
  (country) => country.allCountries
);

export const selectVertualLanguages = createSelector(
  [selectCountries],
  (country) => country.virtualLanguages
);

export const selectAllLanguages = createSelector(
  [selectCountries],
  (country) => country.allLanguages
);
