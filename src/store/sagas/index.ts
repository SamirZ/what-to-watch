import { all, fork } from "redux-saga/effects";

import * as movieDetailsSagas from "./movie";
import * as tvShowDetailsSagas from "./tv-show";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(movieDetailsSagas),
      ...Object.values(tvShowDetailsSagas)
    ].map(fork)
  );
}
