"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

import SearchResultList from "@/components/search/SearchResultList";
import { searchMulti } from "@/lib/apis/search";
import { QUERY_GC_TIME, QUERY_KEYS, QUERY_STALE_TIME } from "@/lib/constants/query";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import { removeDuplicateItems } from "@/lib/utils/media";

type Props = {
  keyword: string;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

const SearchContent = ({ keyword, scrollContainerRef }: Props) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: QUERY_KEYS.search(keyword),
    queryFn: ({ pageParam }) => searchMulti(keyword, pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const results = useMemo(
    () =>
      removeDuplicateItems(
        data.pages
          .flatMap(page => page.results)
          .filter(item => item.media_type !== "person" && item.poster_path),
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
      <SearchResultList variant="result" results={results} />
      {isFetchingNextPage && (
        <div className="text-body-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
      )}
      <div ref={sentinelRef} />
    </>
  );
};

export default SearchContent;
