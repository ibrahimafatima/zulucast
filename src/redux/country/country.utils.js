export const deleteCountry = (allCountries, countryId) => {
  return allCountries.filter((country) => country._id !== countryId);
};

export const deleteLanguage = (allLanguages, languageId) => {
  return allLanguages.filter((language) => language._id !== languageId);
};
