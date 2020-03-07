import {
  MovieActionTypes,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIES_LIST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE
} from "../types";
import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import MovieDetails from "../../models/move-details.model.ts";
import MovieListResult from "../../models/movie-list-result.model";

export interface MovieDetailsState {
  isLoading: boolean;
  movieDetails?: MovieDetails;
  moviesList: ApiList<MovieListResult>;
  error?: ApiErrorModel;
}

const initialState: MovieDetailsState = {
  isLoading: false,
  movieDetails: undefined,
  moviesList: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  },
  error: undefined
};

export const movie = (
  state = initialState,
  action: MovieActionTypes
): MovieDetailsState => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        isLoading: true
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload.data,
        isLoading: false
      };
    case GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case GET_MOVIES_LIST:
      return {
        ...state,
        isLoading: true
      };
    case GET_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        moviesList: action.payload.data,
        isLoading: false
      };
    case GET_MOVIES_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    default:
      return state;
  }
};
