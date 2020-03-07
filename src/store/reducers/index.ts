import { combineReducers } from "redux";

import { movie } from "./movie";
import { tvShow } from "./tv-show";

const rootReducer = combineReducers({
  movie,
  tvShow
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
