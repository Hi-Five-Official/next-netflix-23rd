import { useQuery } from "@tanstack/react-query";

import { getTrendingAll } from "@/lib/apis/home";
import { searchMulti } from "@/lib/apis/search";

export const useSearchMulti = (query: string) => {
  const trimmedQuery = query.trim();

  return useQuery({
    queryKey: ["search", trimmedQuery],
    queryFn: () => searchMulti(trimmedQuery, 1),
    enabled: trimmedQuery.length > 0,
  });
};

export const useTopSearches = () => {
  return useQuery({
    queryKey: ["top-searches"],
    queryFn: getTrendingAll,
  });
};
// 검색어가 없으면 Top searches 호출, 검색어가 있을 때만 API 호출
