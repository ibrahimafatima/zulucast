import movieActionTypes from "./movies.type";

const INITIAL_STATE = {
  allMovies: [],
  vertualMovies: [],
  orders: [],
  longevity: {},
  isLoading: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIES_START:
    case movieActionTypes.FETCH_LONGEVITY_START:
    case movieActionTypes.ADD_TO_ORDER_START:
    case movieActionTypes.ADD_EXPIRY_DATE_START:
    case movieActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case movieActionTypes.FETCH_LONGEVITY_SUCCESS:
      return {
        ...state,
        longevity: action.payload,
        isLoading: false,
      };
    case movieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
        vertualMovies: action.payload,
        isLoading: false,
      };
    case movieActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
      };
    case movieActionTypes.FETCH_MOVIES_FAILURE:
    case movieActionTypes.FETCH_LONGEVITY_FAILURE:
    case movieActionTypes.ADD_TO_ORDER_SUCCESS:
    case movieActionTypes.ADD_TO_ORDER_FAILURE:
    case movieActionTypes.ADD_EXPIRY_DATE_FAILURE:
    case movieActionTypes.ADD_EXPIRY_DATE_SUCCESS:
    case movieActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
