import { tmdbClient } from "@/lib/apis/tmdbClient";
import { MovieDetailResponse, TvDetailResponse } from "@/types/detail";

export const getDetail = (mediaType: "movie" | "tv", id: string) =>
  tmdbClient<MovieDetailResponse | TvDetailResponse>(`/${mediaType}/${id}?language=ko-KR`, 86400);
