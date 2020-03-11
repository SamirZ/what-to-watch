import { RootState } from "../reducers";
import { getTvShowListAction } from "../../store/actions";

export const selectTvShow = (state: RootState) => state.tvShow;
export const selectTvShowList = (state: RootState) => ({
  ...state.tvShow.tvShowList,
  isLoading: state.tvShow.isLoading,
  getListAction: getTvShowListAction
});
