import movieActionTypes from "./movies.type";
import { toast } from "react-toastify";
import { getMovies, addOrder, getOrders } from "../../services/movieServices";

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

export const fetchOrderStart = () => ({
  type: movieActionTypes.FETCH_ORDERS_START,
});

export const fetchOrderSuccess = (orders) => ({
  type: movieActionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrderFailure = () => ({
  type: movieActionTypes.FETCH_ORDERS_FAILURE,
});

export const fetchOrderAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchOrderStart());
      const { data } = await getOrders();
      dispatch(fetchOrderSuccess(data));
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(fetchOrderFailure());
        toast.error(ex.response.data);
      }
    }
  };
};

export const addOrderStart = () => ({
  type: movieActionTypes.ADD_TO_ORDER_START,
});

export const addOrderSuccess = () => ({
  type: movieActionTypes.ADD_TO_ORDER_SUCCESS,
});

export const addOrderFailure = () => ({
  type: movieActionTypes.ADD_TO_ORDER_FAILURE,
});

export const addOrderAsync = (orders) => {
  return async (dispatch) => {
    try {
      dispatch(addOrderStart());
      // console.log("orders", orders);
      // console.log("order", orders[0]);
      for (var i = 0; i < orders.length; i++) await addOrder(orders[i]);
      //await addOrder(orders);
      dispatch(addOrderSuccess());

      window.location = "/playlist";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(addOrderFailure());
        console.log(ex.response.data);
        alert(ex.response.data);
      }
    }
  };
};
