import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import usersReducer from "./users/users.reducer";
import moviesReducer from "./movies/movies.reducer";
import genresReducer from "./moviesGenre/genres.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  movies: moviesReducer,
  genres: genresReducer,
});

export default rootReducer;
