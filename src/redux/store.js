import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
