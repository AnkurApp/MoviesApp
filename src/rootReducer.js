import { combineReducers } from "redux";
import { movieReducer } from "./Redux/reducer";

export const rootReducer = combineReducers({
  movieReducer,
});
