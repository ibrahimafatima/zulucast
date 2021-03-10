import usersActionTypes from "./users.types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersActionTypes.USERS_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case usersActionTypes.USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case usersActionTypes.USERS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
