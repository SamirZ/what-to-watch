import axios, { AxiosResponse } from "axios";

import ApiList from "../models/api-list.model";
import MovieDetails from "../models/move-details.model.ts";
import MovieListResult from "../models/movie-list-result.model";
import TvShowDetails from "../models/tv-show-details.model";
import TvShowListResult from "../models/tv-show-list-result.model";
import VideosList from "../models/videos-list.model";

axios.interceptors.request.use(req => ({
  ...req,
  params: { ...req.params, api_key: process.env.REACT_APP_API_KEY }
}));

const endpoint = "https://api.themoviedb.org/3";

const extractData = ({ data }: AxiosResponse) => data;

export const getMovieDetails = async (id: string) => {
  return await axios
    .get<MovieDetails>(`${endpoint}/movie/${id}`)
    .then(extractData);
};

export const getTvShowDetails = async (id: string) => {
  return await axios
    .get<TvShowDetails>(`${endpoint}/tv/${id}`)
    .then(extractData);
};

export const getMoviesList = async (page: number = 1) => {
  return await axios
    .get<ApiList<MovieListResult>>(`${endpoint}/movie/top_rated`, {
      params: {
        page
      }
    })
    .then(extractData);
};

export const getTvShowList = async (page: number = 1) => {
  return await axios
    .get<ApiList<TvShowListResult>>(`${endpoint}/tv/top_rated`, {
      params: {
        page
      }
    })
    .then(extractData);
};

export const searchMoviesList = async (query: string, page: number = 1) => {
  return await axios
    .get<ApiList<MovieListResult>>(`${endpoint}/search/movie`, {
      params: {
        query,
        page
      }
    })
    .then(extractData);
};

export const searchTvShowList = async (query: string, page: number = 1) => {
  return await axios
    .get<ApiList<TvShowListResult>>(`${endpoint}/search/tv`, {
      params: {
        query,
        page
      }
    })
    .then(extractData);
};

export const getMovieVideo = async (id: string) => {
  return await axios
    .get<VideosList>(`${endpoint}/movie/${id}/videos`)
    .then(extractData);
};

export const getTvShowVideo = async (id: string) => {
  return await axios
    .get<VideosList>(`${endpoint}/tv/${id}/videos`)
    .then(extractData);
};
