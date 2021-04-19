import usersActionTypes from "./users.types";
import { getUsers } from "../../services/usersService";
import { toast } from "react-toastify";
import {
  login,
  register,
  resetPassword,
  updateUsername,
} from "../../services/authServices";

export const fetchUsersStart = () => ({
  type: usersActionTypes.USERS_FETCH_START,
});

export const fetchUsersSuccess = (users) => ({
  type: usersActionTypes.USERS_FETCH_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = () => ({
  type: usersActionTypes.USERS_FETCH_FAILURE,
});

export const fetchUsersAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersStart());
      const { data: users } = await getUsers();
      dispatch(fetchUsersSuccess(users));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchUsersFailure());
        toast.error(ex.response.data);
      }
    }
  };
};

export const loginUserStart = () => ({
  type: usersActionTypes.LOGIN_USER_START,
});

export const loginUserSuccess = () => ({
  type: usersActionTypes.LOGIN_USER_SUCCESS,
});

export const loginUserFailure = () => ({
  type: usersActionTypes.LOGIN_USER_FAILURE,
});

// export const userPasswordResetAsync = (user_details) => {
//   return async (dispatch) => {
//     try {
//       dispatch(addDataStart());
//       await changePassword(user_details);
//       dispatch(addDataSuccess());
//       toast("Password successfully reset.");
//       window.location = "/dashboard";
//     } catch (ex) {
//       if (ex.response && ex.response.status === 404) {
//         dispatch(addDataFailure());
//         toast.error(ex.response.data);
//       }
//     }
//   };
// };

export const loginUserAsync = (user_details) => {
  return async (dispatch) => {
    try {
      dispatch(loginUserStart());
      const { data: token } = await login(user_details);
      dispatch(loginUserSuccess());
      localStorage.setItem("token", token);
      toast.success("Successfully logged In, Redirecting...");
      if ("from" in localStorage) {
        window.location = "/cart";
        localStorage.removeItem("from");
      } else window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        dispatch(loginUserFailure());
        alert(ex.response.data);
        toast.error(ex.response.data);
      }
    }
  };
};

export const registerUserStart = () => ({
  type: usersActionTypes.REGISTER_USER_START,
});

export const registerUserSuccess = () => ({
  type: usersActionTypes.REGISTER_USER_SUCCESS,
});

export const registerUserFailure = () => ({
  type: usersActionTypes.REGISTER_USER_FAILURE,
});

export const registerUserAsync = (user_details) => {
  return async (dispatch) => {
    try {
      dispatch(registerUserStart());
      const { data: token } = await register(user_details);
      dispatch(registerUserSuccess());
      localStorage.setItem("token", token);
      localStorage.removeItem("zulu_mail");
      toast.success("Registration Successfull, Redirecting...");
      if ("from" in localStorage) {
        window.location = "/cart";
        localStorage.removeItem("from");
      } else window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        dispatch(registerUserFailure());
        //toast.error(ex.response.data);
        alert(ex.response.data);
      }
    }
  };
};

export const passwordResetStart = () => ({
  type: usersActionTypes.PASSWORD_RESET_START,
});

export const passwordResetSuccess = () => ({
  type: usersActionTypes.PASSWORD_RESET_SUCCESS,
});

export const passwordResetFailure = () => ({
  type: usersActionTypes.PASSWORD_RESET_FAILURE,
});

export const passwordResetAsync = (user_details) => {
  return async (dispatch) => {
    try {
      dispatch(passwordResetStart());
      await resetPassword(user_details);
      dispatch(passwordResetSuccess());
      toast.success("Successfull Reset, Redirecting...");
      localStorage.removeItem("token");
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(passwordResetFailure());
        //toast.error(ex.response.data);
        alert(ex.response.data);
      }
    }
  };
};

export const usernameUpdateStart = () => ({
  type: usersActionTypes.USERNAME_RESET_START,
});

export const usernameUpdateSuccess = () => ({
  type: usersActionTypes.USERNAME_RESET_SUCCESS,
});

export const usernameUpdateFailure = () => ({
  type: usersActionTypes.USERNAME_RESET_FAILURE,
});

export const usernameUpdateAsync = (user_details) => {
  return async (dispatch) => {
    try {
      dispatch(usernameUpdateStart());
      await updateUsername(user_details);
      dispatch(usernameUpdateSuccess());
      toast.success("Username Successfuly updated, Redirecting...");
      window.location = "/settings";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(usernameUpdateFailure());
        //toast.error(ex.response.data);
        alert(ex.response.data);
      }
    }
  };
};
