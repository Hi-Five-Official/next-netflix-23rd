import { ANIMATION_GENRE_ID, NETFLIX_NETWORK_ID } from "@/constants/tmdb";
import { tmdbClient } from "@/lib/apis/tmdbClient";
import {
  MovieListResponse,
  PopularMoviesResponse,
  TrendingAllResponse,
  TvListResponse,
} from "@/types/home";

export const getTrendingAll = (page = 1) =>
  tmdbClient<TrendingAllResponse>(`/trending/all/day?language=ko-KR&page=${page}`, 3600);

export const getPopularMovies = () =>
  tmdbClient<PopularMoviesResponse>("/movie/popular?language=ko-KR&page=1", 7200);

export const getNetflixOriginals = () =>
  tmdbClient<TvListResponse>(
    `/discover/tv?with_networks=${NETFLIX_NETWORK_ID}&language=ko-KR&page=1`,
    21600,
  );

export const getKoreanMovies = () =>
  tmdbClient<MovieListResponse>(
    "/discover/movie?with_origin_country=KR&language=ko-KR&page=1",
    21600,
  );

export const getAnimationMovies = () =>
  tmdbClient<MovieListResponse>(
    `/discover/movie?with_genres=${ANIMATION_GENRE_ID}&language=ko-KR&page=1`,
    21600,
  );
