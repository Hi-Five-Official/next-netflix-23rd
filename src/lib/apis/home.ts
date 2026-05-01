import { tmdbClient } from "@/lib/apis/tmdbClient";
import {
  MovieListResponse,
  PopularMoviesResponse,
  TrendingAllResponse,
  TvListResponse,
} from "@/types/home";

const NETFLIX_NETWORK_ID = 213;
const ANIMATION_GENRE_ID = 16;

export const getTrendingAll = () =>
  tmdbClient<TrendingAllResponse>("/trending/all/day?language=ko-KR");

export const getPopularMovies = () =>
  tmdbClient<PopularMoviesResponse>("/movie/popular?language=ko-KR&page=1");

export const getNetflixOriginals = () =>
  tmdbClient<TvListResponse>(
    `/discover/tv?with_networks=${NETFLIX_NETWORK_ID}&language=ko-KR&page=1`,
  );

export const getKoreanMovies = () =>
  tmdbClient<MovieListResponse>("/discover/movie?with_origin_country=KR&language=ko-KR&page=1");

export const getAnimationMovies = () =>
  tmdbClient<MovieListResponse>(
    `/discover/movie?with_genres=${ANIMATION_GENRE_ID}&language=ko-KR&page=1`,
  );
