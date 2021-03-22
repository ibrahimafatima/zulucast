import movieActionTypes from "./movies.type";

const INITIAL_STATE = {
  allMovies: [],
  vertualMovies: [],
  isLoading: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case movieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
        vertualMovies: action.payload,
        isLoading: false,
      };
    case movieActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
