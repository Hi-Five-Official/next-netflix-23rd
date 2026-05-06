import { useInfiniteQuery } from "@tanstack/react-query";

import { getTrendingAll } from "@/lib/apis/home";
import { searchMulti } from "@/lib/apis/search";

export const useSearchMulti = (query: string) => {
  const trimmedQuery = query.trim();

  return useInfiniteQuery({
    queryKey: ["search", trimmedQuery],
    queryFn: ({ pageParam }) => searchMulti(trimmedQuery, pageParam),

    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }
      return lastPage.page + 1;
    },

    enabled: trimmedQuery.length > 0,
  });
};

export const useTopSearches = () => {
  return useInfiniteQuery({
    queryKey: ["top-searches"],
    queryFn: ({ pageParam }) => getTrendingAll(Number(pageParam)),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }
      return lastPage.page + 1;
    },
  });
};
// 검색어가 없으면 Top searches 호출, 검색어가 있을 때만 API 호출
