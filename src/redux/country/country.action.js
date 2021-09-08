import countryActionType from "./country.type";
import { toast } from "react-toastify";
import {
  getCountries,
  postCountry,
  deleteCountry,
  getLanguages,
  postLanguage,
  deleteLanguage,
} from "../../services/countryService";

export const fetchCountryStart = () => ({
  type: countryActionType.FETCH_COUNTRY_START,
});

export const fetchCountrySuccess = (country) => ({
  type: countryActionType.FETCH_COUNTRY_SUCCESS,
  payload: country,
});

export const fetchCountryFailure = () => ({
  type: countryActionType.FETCH_COUNTRY_FAILURE,
});

export const fetchCountryAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCountryStart());
      const { data } = await getCountries();
      dispatch(fetchCountrySuccess(data));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchCountryFailure());
        toast.error(ex.response.data);
      }
    }
  };
};

export const addCountryStart = () => ({
  type: countryActionType.ADD_COUNTRY_START,
});

export const addCountrySuccess = () => ({
  type: countryActionType.ADD_COUNTRY_SUCCESS,
});

export const addCountryFailure = () => ({
  type: countryActionType.ADD_COUNTRY_FAILURE,
});

export const addCountryAsync = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(addCountryStart());
      await postCountry(payload);
      dispatch(addCountrySuccess());
      toast.success("Country successfully saved");
      setTimeout(() => (window.location = "/add-country/new"), 2000);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(addCountryFailure());
        toast.error(ex.response.data);
        setTimeout(() => (window.location = "/add-country/new"), 2000);
      }
    }
  };
};

export const deleteCountryStart = () => ({
  type: countryActionType.DELETE_COUNTRY_START,
});

export const deleteCountrySuccess = (countryId) => ({
  type: countryActionType.DELETE_COUNTRY_SUCCESS,
  payload: countryId,
});

export const deleteCountryFailure = () => ({
  type: countryActionType.DELETE_COUNTRY_FAILURE,
});

export const deleteCountryAsync = (countryId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteCountryStart());
      await deleteCountry(countryId);
      dispatch(deleteCountrySuccess(countryId));
      toast.success("Country successfully deleted");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(deleteCountryFailure());
        toast.error(ex.response.data);
      }
    }
  };
};

export const fetchLanguageStart = () => ({
  type: countryActionType.FETCH_LANGUAGE_START,
});

export const fetchLanguageSuccess = (language) => ({
  type: countryActionType.FETCH_LANGUAGE_SUCCESS,
  payload: language,
});

export const fetchLanguageFailure = () => ({
  type: countryActionType.FETCH_LANGUAGE_FAILURE,
});

export const fetchLanguageAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLanguageStart());
      const { data } = await getLanguages();
      dispatch(fetchLanguageSuccess(data));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchLanguageFailure());
        toast.error(ex.response.data);
      }
    }
  };
};

export const addLanguageStart = () => ({
  type: countryActionType.ADD_LANGUAGE_START,
});

export const addLanguageSuccess = () => ({
  type: countryActionType.ADD_LANGUAGE_SUCCESS,
});

export const addLanguageFailure = () => ({
  type: countryActionType.ADD_LANGUAGE_FAILURE,
});

export const addLanguageAsync = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(addLanguageStart());
      await postLanguage(payload);
      dispatch(addLanguageSuccess());
      toast.success("Language successfully saved");
      setTimeout(() => (window.location = "/add-language/new"), 2000);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(addLanguageFailure());
        toast.error(ex.response.data);
        setTimeout(() => (window.location = "/add-language/new"), 2000);
      }
    }
  };
};

export const deleteLanguageStart = () => ({
  type: countryActionType.DELETE_LANGUAGE_START,
});

export const deleteLanguageSuccess = (languageId) => ({
  type: countryActionType.DELETE_LANGUAGE_SUCCESS,
  payload: languageId,
});

export const deleteLanguageFailure = () => ({
  type: countryActionType.DELETE_LANGUAGE_FAILURE,
});

export const deleteLanguageAsync = (languageId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteLanguageStart());
      await deleteLanguage(languageId);
      dispatch(deleteLanguageSuccess(languageId));
      toast.success("Language successfully deleted");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(deleteLanguageFailure());
        toast.error(ex.response.data);
      }
    }
  };
};
