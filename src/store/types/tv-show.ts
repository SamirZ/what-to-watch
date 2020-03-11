import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import TvShowDetails from "../../models/tv-show-details.model";
import TvShowListResult from "../../models/tv-show-list-result.model";
import VideoResult from "../../models/video-result.model";

// TYPE CONSTANTS
export const GET_TV_SHOW_DETAILS = "GET_TV_SHOW_DETAILS";
export const GET_TV_SHOW_DETAILS_SUCCESS = "GET_TV_SHOW_DETAILS_SUCCESS";
export const GET_TV_SHOW_DETAILS_FAILURE = "GET_TV_SHOW_DETAILS_FAILURE";

export const GET_TV_SHOWS_LIST = "GET_TV_SHOWS_LIST";
export const GET_TV_SHOWS_LIST_LOADING = "GET_TV_SHOWS_LIST_LOADING";
export const GET_TV_SHOWS_LIST_SUCCESS = "GET_TV_SHOWS_LIST_SUCCESS";
export const GET_TV_SHOWS_LIST_FAILURE = "GET_TV_SHOWS_LIST_FAILURE";

// ACTION INTERFACES
// END GetTvShowDetailsAction
export interface GetTvShowDetailsAction {
  type: typeof GET_TV_SHOW_DETAILS;
  payload: {
    id: string;
  };
}

export interface GetTvShowDetailsActionSuccess {
  type: typeof GET_TV_SHOW_DETAILS_SUCCESS;
  payload: {
    data: TvShowDetails;
    video?: VideoResult;
  };
}

export interface GetTvShowDetailsActionFaliure {
  type: typeof GET_TV_SHOW_DETAILS_FAILURE;
  payload: {
    error: ApiErrorModel;
  };
}
// END GetTvShowDetailsAction

// START GetTvShowListAction
export interface GetTvShowListAction {
  type: typeof GET_TV_SHOWS_LIST;
  payload: {
    page: number;
  };
}

export interface GetTvShowListLoadingAction {
  type: typeof GET_TV_SHOWS_LIST_LOADING;
  payload: {
    page: number;
  };
}

export interface GetTvShowListActionSuccess {
  type: typeof GET_TV_SHOWS_LIST_SUCCESS;
  payload: {
    data: ApiList<TvShowListResult>;
  };
}

export interface GetTvShowListActionFaliure {
  type: typeof GET_TV_SHOWS_LIST_FAILURE;
  payload: {
    error: ApiErrorModel;
  };
}
// END GetTvShowListAction

// ACTION TYPES
export type TvShowActionTypes =
  | GetTvShowDetailsAction
  | GetTvShowDetailsActionSuccess
  | GetTvShowDetailsActionFaliure
  | GetTvShowListAction
  | GetTvShowListLoadingAction
  | GetTvShowListActionSuccess
  | GetTvShowListActionFaliure;
