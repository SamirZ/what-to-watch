import { call, put, takeEvery } from "redux-saga/effects";

import { getMovieDetails, getMoviesList } from "../../api/request";
import {
  GetMovieDetailsAction,
  GET_MOVIE_DETAILS,
  GET_MOVIES_LIST
} from "../types";
import {
  getMovieDetailsActionSuccess,
  getMovieDetailsActionFailure,
  getMoviesListActionSuccess,
  getMoviesListActionFailure
} from "../actions";
import ApiList from "../../models/api-list.model";
import MovieDetails from "../../models/move-details.model.ts";
import MovieListResult from "../../models/movie-list-result.model";

function* getMovieDetailsWatcher(action: GetMovieDetailsAction) {
  try {
    const data: MovieDetails = yield call(getMovieDetails, action.payload.id);
    yield put(getMovieDetailsActionSuccess(data));
  } catch (e) {
    yield put(getMovieDetailsActionFailure(e));
  }
}

export function* getMovieDetailsSaga() {
  yield takeEvery(GET_MOVIE_DETAILS, getMovieDetailsWatcher);
}

function* getMoviesListWatcher() {
  try {
    const data: ApiList<MovieListResult> = yield call(getMoviesList);
    yield put(getMoviesListActionSuccess(data));
  } catch (e) {
    yield put(getMoviesListActionFailure(e));
  }
}

export function* getMoviesListSaga() {
  yield takeEvery(GET_MOVIES_LIST, getMoviesListWatcher);
}
