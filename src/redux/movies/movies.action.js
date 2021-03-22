import movieActionTypes from "./movies.type";
import { toast } from "react-toastify";
import { getMovies } from "../../services/movieServices";

export const fetchMoviesStart = () => ({
  type: movieActionTypes.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: movieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = () => ({
  type: movieActionTypes.FETCH_MOVIES_FAILURE,
});

export const fetchMoviesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const { data } = await getMovies();
      dispatch(fetchMoviesSuccess(data));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchMoviesFailure());
        toast.error(ex.response.data);
      }
    }
  };
};
