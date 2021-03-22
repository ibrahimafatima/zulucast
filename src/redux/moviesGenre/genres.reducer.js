import genresActionType from "./genres.type";

const INITIAL_STATE = {
  allGenres: [],
  virtualGenres: [],
  isLoading: false,
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case genresActionType.FETCH_GENRE_START:
      return {
        ...state,
        isLoading: true,
      };
    case genresActionType.FETCH_GENRE_SUCCESS:
      return {
        ...state,
        allGenres: action.payload,
        virtualGenres: action.payload,
        isLoading: false,
      };
    case genresActionType.FETCH_GENRE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default genresReducer;
