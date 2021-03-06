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
    case usersActionTypes.PASSWORD_RESET_START:
    case usersActionTypes.PASSWORD_MODIFY_START:
    case usersActionTypes.USERNAME_RESET_START:
    case usersActionTypes.FORGOT_PASS_MAIL_START:
    case usersActionTypes.FORGOT_PASS_MAIL_SUCCESS:
    case usersActionTypes.LOGIN_USER_SUCCESS:
    case usersActionTypes.REGISTER_USER_SUCCESS:
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
    case usersActionTypes.REGISTER_USER_FAILURE:
    case usersActionTypes.PASSWORD_RESET_SUCCESS:
    case usersActionTypes.PASSWORD_RESET_FAILURE:
    case usersActionTypes.PASSWORD_MODIFY_SUCCESS:
    case usersActionTypes.PASSWORD_MODIFY_FAILURE:
    case usersActionTypes.USERNAME_RESET_SUCCESS:
    case usersActionTypes.USERNAME_RESET_FAILURE:
    case usersActionTypes.LOGIN_USER_FAILURE:
    case usersActionTypes.FORGOT_PASS_MAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
