import {
  TvShowActionTypes,
  GET_TV_SHOW_DETAILS,
  GET_TV_SHOW_DETAILS_SUCCESS,
  GET_TV_SHOW_DETAILS_FAILURE,
  GET_TV_SHOWS_LIST,
  GET_TV_SHOWS_LIST_SUCCESS,
  GET_TV_SHOWS_LIST_FAILURE
} from "../types";
import ApiList from "../../models/api-list.model";
import ApiErrorModel from "../../models/api-error.model";
import TvShowDetails from "../../models/tv-show-details.model";
import TvShowListResult from "../../models/tv-show-list-result.model";
import VideoResult from "../../models/video-result.model";

export interface TvShowDetailsState {
  isLoading: boolean;
  tvShowDetails?: TvShowDetails;
  tvShowList: ApiList<TvShowListResult>;
  error?: ApiErrorModel;
  video?: VideoResult;
}

const initialState: TvShowDetailsState = {
  isLoading: false,
  tvShowDetails: undefined,
  tvShowList: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  },
  video: undefined,
  error: undefined
};

export const tvShow = (
  state = initialState,
  action: TvShowActionTypes
): TvShowDetailsState => {
  switch (action.type) {
    case GET_TV_SHOW_DETAILS:
      return {
        ...state,
        video: undefined,
        isLoading: true
      };
    case GET_TV_SHOWS_LIST:
      return {
        ...state,
        video: undefined,
        tvShowDetails: undefined,
        isLoading: true
      };
    case GET_TV_SHOW_DETAILS_SUCCESS:
      return {
        ...state,
        tvShowDetails: action.payload.data,
        video: action.payload.video,
        isLoading: false
      };
    case GET_TV_SHOWS_LIST_SUCCESS:
      return {
        ...state,
        tvShowList: action.payload.data,
        isLoading: false
      };
    case GET_TV_SHOW_DETAILS_FAILURE:
    case GET_TV_SHOWS_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    default:
      return state;
  }
};
