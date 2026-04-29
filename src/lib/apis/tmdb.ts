import { tmdbClient } from "@/lib/apis/tmdbClient";
import { TrendingAllResponse } from "@/types/tmdb";

// 일간 트렌딩 미디어(영화 + TV) 정보를 가져오는 함수
export const getTrendingAll = () =>
  tmdbClient<TrendingAllResponse>("/trending/all/day?language=ko-KR");
