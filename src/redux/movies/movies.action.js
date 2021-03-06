import movieActionTypes from "./movies.type";
import { toast } from "react-toastify";
import {
  getMovies,
  addOrder,
  addPreOrder,
  getOrders,
  getLongevity,
  updateExpiryDate,
} from "../../services/movieServices";

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

export const fetchLongevityStart = () => ({
  type: movieActionTypes.FETCH_LONGEVITY_START,
});

export const fetchLongevitySuccess = (orders) => ({
  type: movieActionTypes.FETCH_LONGEVITY_SUCCESS,
  payload: orders,
});

export const fetchLongevityFailure = () => ({
  type: movieActionTypes.FETCH_MOVIES_FAILURE,
});

export const fetchLongevityAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLongevityStart());
      const { data } = await getLongevity();
      dispatch(fetchLongevitySuccess(data));
    } catch (ex) {
      dispatch(fetchLongevityFailure());
      toast.error("An error occurred during your request");
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
      for (var i = 0; i < orders.length; i++)
        await addOrder({
          title: orders[i].title,
          price: orders[i].price,
          description: orders[i].description,
          actor: orders[i].actor,
          duration: orders[i].duration,
          moviePictureURL: orders[i].moviePictureURL,
          movieVideoURL: orders[i].movieVideoURL,
        });
      //await addOrder(orders);
      dispatch(addOrderSuccess());

      //window.location = "/playlist";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(addOrderFailure());
        toast.error("An error occurred during your request");

        alert("An error occurred during your request");
      }
    }
  };
};

export const addPreOrderStart = () => ({
  type: movieActionTypes.ADD_TO_PRE_ORDER_START,
});

export const addPreOrderSuccess = () => ({
  type: movieActionTypes.ADD_TO_PRE_ORDER_SUCCESS,
});

export const addPreOrderFailure = () => ({
  type: movieActionTypes.ADD_TO_PRE_ORDER_FAILURE,
});

export const addPreOrderAsync = (orders) => {
  return async (dispatch) => {
    try {
      dispatch(addPreOrderStart());
      for (var i = 0; i < orders.length; i++)
        await addPreOrder({
          title: orders[i].title,
          price: orders[i].price,
          description: orders[i].description,
          actor: orders[i].actor,
          duration: orders[i].duration,
          moviePictureURL: orders[i].moviePictureURL,
          movieVideoURL: orders[i].movieVideoURL,
        });
      dispatch(addPreOrderSuccess());

      //window.location = "/playlist";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch(addPreOrderFailure());
        toast.error("An error occurred during your request");
        alert("An error occurred during your request");
      }
    }
  };
};

export const addExpiryDateStart = () => ({
  type: movieActionTypes.ADD_EXPIRY_DATE_START,
});

export const addExpiryDateSuccess = () => ({
  type: movieActionTypes.ADD_EXPIRY_DATE_SUCCESS,
});

export const addExpiryDateFailure = () => ({
  type: movieActionTypes.ADD_EXPIRY_DATE_FAILURE,
});

export const addExpiryDateAsync = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(addExpiryDateStart());
      await updateExpiryDate(payload);
      dispatch(addExpiryDateSuccess());
    } catch (ex) {
      dispatch(addExpiryDateFailure());
      toast.error("An error occurred during your request");
      alert("An error occurred during your request");
    }
  };
};
