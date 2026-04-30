import { tmdbClient } from "@/lib/apis/tmdbClient";
import {
  MovieListResponse,
  PopularMoviesResponse,
  TrendingAllResponse,
  TvListResponse,
} from "@/types/tmdb";

// 홈페이지 Top10 섹션
export const getTrendingAll = () =>
  tmdbClient<TrendingAllResponse>("/trending/all/day?language=ko-KR");

// 홈페이지 Preview 섹션
export const getPopularMovies = () =>
  tmdbClient<PopularMoviesResponse>("/movie/popular?language=ko-KR&page=1");

// 홈페이지 Netflix Originals 섹션
export const getNetflixOriginals = () =>
  tmdbClient<TvListResponse>("/discover/tv?with_networks=213&language=ko-KR&page=1");
// 홈페이지 Korea Movies 섹션
export const getKoreanMovies = () =>
  tmdbClient<MovieListResponse>("/discover/movie?with_origin_country=KR&language=ko-KR&page=1");
// 홈페이지 Animation 섹션
export const getAnimationMovies = () =>
  tmdbClient<MovieListResponse>("/discover/movie?with_genres=16&language=ko-KR&page=1");
