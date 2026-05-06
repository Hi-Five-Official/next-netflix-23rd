import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

import { getTrendingAll } from "@/lib/apis/home";
import { searchMulti } from "@/lib/apis/search";
import { QUERY_GC_TIME, QUERY_STALE_TIME, TOP_SEARCHES_STALE_TIME } from "@/lib/constants/query";

export const useSearchMulti = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam }) => searchMulti(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
    enabled: query.length > 0,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
    placeholderData: keepPreviousData,
  });
};

export const useTopSearches = () => {
  return useInfiniteQuery({
    queryKey: ["top-searches"],
    queryFn: ({ pageParam }) => getTrendingAll(Number(pageParam)),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
    staleTime: TOP_SEARCHES_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });
};
