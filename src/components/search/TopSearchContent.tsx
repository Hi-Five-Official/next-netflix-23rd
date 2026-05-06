"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

import SearchResultList from "@/components/search/SearchResultList";
import { getTrendingAll } from "@/lib/apis/home";
import { QUERY_GC_TIME, QUERY_KEYS, TOP_SEARCHES_STALE_TIME } from "@/lib/constants/query";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import { removeDuplicateItems } from "@/lib/utils/media";

type Props = { scrollContainerRef: React.RefObject<HTMLDivElement | null> };

const TopSearchContent = ({ scrollContainerRef }: Props) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: QUERY_KEYS.topSearches,
    queryFn: ({ pageParam }) => getTrendingAll(Number(pageParam)),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
    staleTime: TOP_SEARCHES_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const results = useMemo(
    () =>
      removeDuplicateItems(
        data.pages
          .flatMap(page => page.results)
          .filter(item => item.media_type === "movie" || item.media_type === "tv")
          .filter(item => item.poster_path),
      ),
    [data],
  );

  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  useIntersectionObserver(sentinelRef, handleLoadMore, scrollContainerRef, data.pages.length);

  return (
    <>
      <SearchResultList variant="top" results={results} />
      {isFetchingNextPage && (
        <div className="text-body-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
      )}
      <div ref={sentinelRef} />
    </>
  );
};

export default TopSearchContent;
