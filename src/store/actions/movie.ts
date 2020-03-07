import {
  MovieActionTypes,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIES_LIST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE
} from "../types";
import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import MovieDetails from "../../models/move-details.model.ts";
import MovieListResult from "../../models/movie-list-result.model";

export const getMovieDetailsAction = (id: string): MovieActionTypes => ({
  type: GET_MOVIE_DETAILS,
  payload: {
    id
  }
});

export const getMovieDetailsActionSuccess = (
  data: MovieDetails
): MovieActionTypes => ({
  type: GET_MOVIE_DETAILS_SUCCESS,
  payload: {
    data
  }
});

export const getMovieDetailsActionFailure = (
  error: ApiErrorModel
): MovieActionTypes => ({
  type: GET_MOVIE_DETAILS_FAILURE,
  payload: {
    error
  }
});

export const getMoviesListAction = (): MovieActionTypes => ({
  type: GET_MOVIES_LIST
});

export const getMoviesListActionSuccess = (
  data: ApiList<MovieListResult>
): MovieActionTypes => ({
  type: GET_MOVIES_LIST_SUCCESS,
  payload: {
    data
  }
});

export const getMoviesListActionFailure = (
  error: ApiErrorModel
): MovieActionTypes => ({
  type: GET_MOVIES_LIST_FAILURE,
  payload: {
    error
  }
});
