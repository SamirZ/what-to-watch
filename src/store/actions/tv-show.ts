import {
  TvShowActionTypes,
  GET_TV_SHOW_DETAILS,
  GET_TV_SHOW_DETAILS_SUCCESS,
  GET_TV_SHOW_DETAILS_FAILURE,
  GET_TV_SHOWS_LIST,
  GET_TV_SHOWS_LIST_LOADING,
  GET_TV_SHOWS_LIST_SUCCESS,
  GET_TV_SHOWS_LIST_FAILURE
} from "../types";
import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import TvShowDetails from "../../models/tv-show-details.model";
import TvShowListResult from "../../models/tv-show-list-result.model";
import VideoResult from "../../models/video-result.model";

export const getTvShowDetailsAction = (id: string): TvShowActionTypes => ({
  type: GET_TV_SHOW_DETAILS,
  payload: {
    id
  }
});

export const getTvShowDetailsActionSuccess = (
  data: TvShowDetails,
  video?: VideoResult
): TvShowActionTypes => ({
  type: GET_TV_SHOW_DETAILS_SUCCESS,
  payload: {
    data,
    video
  }
});

export const getTvShowDetailsActionFailure = (
  error: ApiErrorModel
): TvShowActionTypes => ({
  type: GET_TV_SHOW_DETAILS_FAILURE,
  payload: {
    error
  }
});

export const getTvShowListAction = (page: number = 1): TvShowActionTypes => ({
  type: GET_TV_SHOWS_LIST,
  payload: {
    page
  }
});

export const getTvShowListLoadingAction = (
  page: number = 1
): TvShowActionTypes => ({
  type: GET_TV_SHOWS_LIST_LOADING,
  payload: {
    page
  }
});

export const getTvShowListActionSuccess = (
  data: ApiList<TvShowListResult>
): TvShowActionTypes => ({
  type: GET_TV_SHOWS_LIST_SUCCESS,
  payload: {
    data
  }
});

export const getTvShowListActionFailure = (
  error: ApiErrorModel
): TvShowActionTypes => ({
  type: GET_TV_SHOWS_LIST_FAILURE,
  payload: {
    error
  }
});
