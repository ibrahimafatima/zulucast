import genresActionType from "./genres.type";
import { toast } from "react-toastify";
import { getGenres } from "../../services/genresServices";

export const fetchGenresStart = () => ({
  type: genresActionType.FETCH_GENRE_START,
});

export const fetchGenresSuccess = (genres) => ({
  type: genresActionType.FETCH_GENRE_SUCCESS,
  payload: genres,
});

export const fetchGenresFailure = () => ({
  type: genresActionType.FETCH_GENRE_FAILURE,
});

export const fetchGenresAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGenresStart());
      const { data } = await getGenres();
      dispatch(fetchGenresSuccess(data));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchGenresFailure());
        toast.error(ex.response.data);
      }
    }
  };
};
