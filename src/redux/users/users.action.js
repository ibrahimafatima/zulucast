import usersActionTypes from "./users.types";
import { getUsers } from "../../services/usersService";

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
        //toast.error(ex.response.data);
      }
    }
  };
};
