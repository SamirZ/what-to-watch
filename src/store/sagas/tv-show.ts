import { call, put, takeEvery } from "redux-saga/effects";

import { getTvShowDetails, getTvShowList } from "../../api/request";
import {
  GET_TV_SHOW_DETAILS,
  GetTvShowDetailsAction,
  GET_TV_SHOWS_LIST
} from "../types";
import {
  getTvShowDetailsActionSuccess,
  getTvShowDetailsActionFailure,
  getTvShowListActionSuccess,
  getTvShowListActionFailure
} from "../actions";
import ApiList from "../../models/api-list.model";
import TvShowListResult from "../../models/tv-show-list-result.model";

function* getTvShowDetailsWatcher(action: GetTvShowDetailsAction) {
  try {
    const data = yield call(getTvShowDetails, action.payload.id);
    yield put(getTvShowDetailsActionSuccess(data));
  } catch (e) {
    yield put(getTvShowDetailsActionFailure(e));
  }
}

export function* getTvShowDetailsSaga() {
  yield takeEvery(GET_TV_SHOW_DETAILS, getTvShowDetailsWatcher);
}

function* getTvShowListWatcher() {
  try {
    const data: ApiList<TvShowListResult> = yield call(getTvShowList);
    yield put(getTvShowListActionSuccess(data));
  } catch (e) {
    yield put(getTvShowListActionFailure(e));
  }
}

export function* getMoviesListSaga() {
  yield takeEvery(GET_TV_SHOWS_LIST, getTvShowListWatcher);
}
