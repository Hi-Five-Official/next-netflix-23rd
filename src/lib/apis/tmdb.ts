import { tmdbClient } from "@/lib/apis/tmdbClient";
import {
  MovieDetailResponse,
  MovieListResponse,
  PopularMoviesResponse,
  TrendingAllResponse,
  TvDetailResponse,
  TvListResponse,
} from "@/types/tmdb";

const NETFLIX_NETWORK_ID = 213;
const ANIMATION_GENRE_ID = 16;

// 홈페이지 Top10 섹션
export const getTrendingAll = () =>
  tmdbClient<TrendingAllResponse>("/trending/all/day?language=ko-KR");

// 홈페이지 Preview 섹션
export const getPopularMovies = () =>
  tmdbClient<PopularMoviesResponse>("/movie/popular?language=ko-KR&page=1");

// 홈페이지 Netflix Originals 섹션
export const getNetflixOriginals = () =>
  tmdbClient<TvListResponse>(
    `/discover/tv?with_networks=${NETFLIX_NETWORK_ID}&language=ko-KR&page=1`,
  );

// 홈페이지 Korea Movies 섹션
export const getKoreanMovies = () =>
  tmdbClient<MovieListResponse>("/discover/movie?with_origin_country=KR&language=ko-KR&page=1");

// 홈페이지 Animation 섹션
export const getAnimationMovies = () =>
  tmdbClient<MovieListResponse>(
    `/discover/movie?with_genres=${ANIMATION_GENRE_ID}&language=ko-KR&page=1`,
  );

// Detail 페이지
export const getDetail = (mediaType: "movie" | "tv", id: string) =>
  tmdbClient<MovieDetailResponse | TvDetailResponse>(`/${mediaType}/${id}?language=ko-KR`);
