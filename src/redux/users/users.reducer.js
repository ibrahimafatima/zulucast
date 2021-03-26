import usersActionTypes from "./users.types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersActionTypes.USERS_FETCH_START:
    case usersActionTypes.LOGIN_USER_START:
    case usersActionTypes.REGISTER_USER_START:
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
    case usersActionTypes.REGISTER_USER_SUCCESS:
    case usersActionTypes.REGISTER_USER_FAILURE:
    case usersActionTypes.LOGIN_USER_SUCCESS:
    case usersActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
