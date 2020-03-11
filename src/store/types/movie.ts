import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import MovieDetails from "../../models/move-details.model.ts";
import MovieListResult from "../../models/movie-list-result.model";
import VideoResult from "../../models/video-result.model";

// TYPE CONSTANTS
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const GET_MOVIE_DETAILS_SUCCESS = "GET_MOVIE_DETAILS_SUCCESS";
export const GET_MOVIE_DETAILS_FAILURE = "GET_MOVIE_DETAILS_FAILURE";

export const GET_MOVIES_LIST = "GET_MOVIES_LIST";
export const GET_MOVIES_LIST_LOADING = "GET_MOVIES_LIST_LOADING";
export const GET_MOVIES_LIST_SUCCESS = "GET_MOVIES_LIST_SUCCESS";
export const GET_MOVIES_LIST_FAILURE = "GET_MOVIES_LIST_FAILURE";

// ACTION INTERFACES
// START GetMovieDetailsAction
export interface GetMovieDetailsAction {
  type: typeof GET_MOVIE_DETAILS;
  payload: {
    id: string;
  };
}

export interface GetMovieDetailsActionSuccess {
  type: typeof GET_MOVIE_DETAILS_SUCCESS;
  payload: {
    data: MovieDetails;
    video?: VideoResult;
  };
}

export interface GetMovieDetailsActionFaliure {
  type: typeof GET_MOVIE_DETAILS_FAILURE;
  payload: {
    error: ApiErrorModel;
  };
}
// END GetMovieDetailsAction

// START GetMoviesListAction
export interface GetMoviesListAction {
  type: typeof GET_MOVIES_LIST;
  payload: {
    page: number;
  };
}

export interface GetMoviesListLoadingAction {
  type: typeof GET_MOVIES_LIST_LOADING;
  payload: {
    page: number;
  };
}

export interface GetMoviesListActionSuccess {
  type: typeof GET_MOVIES_LIST_SUCCESS;
  payload: {
    data: ApiList<MovieListResult>;
  };
}

export interface GetMoviesListActionFaliure {
  type: typeof GET_MOVIES_LIST_FAILURE;
  payload: {
    error: ApiErrorModel;
  };
}
// END GetMoviesListAction

// ACTION TYPES
export type MovieActionTypes =
  | GetMoviesListAction
  | GetMoviesListActionSuccess
  | GetMoviesListActionFaliure
  | GetMovieDetailsAction
  | GetMoviesListLoadingAction
  | GetMovieDetailsActionSuccess
  | GetMovieDetailsActionFaliure;
