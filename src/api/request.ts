import axios from "axios";

import ApiList from "../models/api-list.model";
import MovieDetails from "../models/move-details.model.ts";
import MovieListResult from "../models/movie-list-result.model";
import TvShowDetails from "../models/tv-show-details.model";
import TvShowListResult from "../models/tv-show-list-result.model";

axios.interceptors.request.use(req => ({
  ...req,
  params: { ...req.params, api_key: process.env.REACT_APP_API_KEY }
}));

const endpoint = "https://api.themoviedb.org/3";

export const getMovieDetails = async (id: string) => {
  return await axios
    .get<MovieDetails>(`${endpoint}/movie/${id}`)
    .then(({ data }) => data);
};

export const getTvShowDetails = async (id: string) => {
  return await axios
    .get<TvShowDetails>(`${endpoint}/tv/${id}`)
    .then(({ data }) => data);
};

export const getMoviesList = async () => {
  return await axios
    .get<ApiList<MovieListResult>>(`${endpoint}/movie/top_rated`)
    .then(({ data }) => data);
};

export const getTvShowList = async () => {
  return await axios
    .get<ApiList<TvShowListResult>>(`${endpoint}/tv/top_rated`)
    .then(({ data }) => data);
};
