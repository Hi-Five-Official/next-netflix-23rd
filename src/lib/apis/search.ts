import { tmdbClient } from "@/lib/apis/tmdbClient";
import { SearchResponse } from "@/types/search";

export const searchMulti = (query: string, page = 1) =>
  tmdbClient<SearchResponse>(
    `/search/multi?query=${encodeURIComponent(query)}&page=${page}&language=ko-KR`,
  );
