import { combineReducers } from "redux";

import { movie } from "./movie";
import { search } from "./search";
import { tvShow } from "./tv-show";

export const rootReducer = combineReducers({
  movie,
  search,
  tvShow
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
