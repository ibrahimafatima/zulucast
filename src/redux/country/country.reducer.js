import countryActionType from "./country.type";
import { deleteCountry, deleteLanguage } from "./country.utils";

const INITIAL_STATE = {
  allCountries: [],
  virtualCountries: [],
  allLanguages: [],
  virtualLanguages: [],
  isLoading: false,
};

const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countryActionType.FETCH_COUNTRY_START:
    case countryActionType.ADD_COUNTRY_START:
    case countryActionType.DELETE_COUNTRY_START:
    case countryActionType.FETCH_LANGUAGE_START:
    case countryActionType.ADD_LANGUAGE_START:
    case countryActionType.DELETE_LANGUAGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case countryActionType.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        allCountries: action.payload,
        virtualCountries: action.payload,
        isLoading: false,
      };
    case countryActionType.FETCH_LANGUAGE_SUCCESS:
      return {
        ...state,
        allLanguages: action.payload,
        virtualLanguages: action.payload,
        isLoading: false,
      };
    case countryActionType.DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCountries: deleteCountry(state.allCountries, action.payload),
      };
    case countryActionType.DELETE_LANGUAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allLanguages: deleteLanguage(state.allLanguages, action.payload),
      };
    case countryActionType.FETCH_COUNTRY_FAILURE:
    case countryActionType.ADD_COUNTRY_SUCCESS:
    case countryActionType.ADD_COUNTRY_FAILURE:
    case countryActionType.DELETE_COUNTRY_FAILURE:
    case countryActionType.FETCH_LANGUAGE_FAILURE:
    case countryActionType.ADD_LANGUAGE_SUCCESS:
    case countryActionType.ADD_LANGUAGE_FAILURE:
    case countryActionType.DELETE_LANGUAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default countryReducer;
