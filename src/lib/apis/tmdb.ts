import { tmdbClient } from "@/lib/apis/tmdbClient";
import { PopularMoviesResponse, TrendingAllResponse } from "@/types/tmdb";

// 홈페이지 Top10 섹션
export const getTrendingAll = () =>
  tmdbClient<TrendingAllResponse>("/trending/all/day?language=ko-KR");

// 홈페이지 Preview 섹션
export const getPopularMovies = () =>
  tmdbClient<PopularMoviesResponse>("/movie/popular?language=ko-KR&page=1");
