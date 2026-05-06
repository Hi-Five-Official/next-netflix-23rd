"use client";

import { useMemo, useRef, useState } from "react";

import SearchInput from "@/components/search/SearchInput";
import SearchResultList from "@/components/search/SearchResultList";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import { useSearchMulti, useTopSearches } from "@/lib/hooks/useSearchMulti";

const removeDuplicateItems = <T extends { id: number; media_type: string }>(items: T[]): T[] =>
  Array.from(new Map(items.map(item => [`${item.media_type}-${item.id}`, item])).values());

const Page = () => {
  const [keyword, setKeyword] = useState("");

  const debouncedKeyword = useDebounce(keyword, 300);
  const trimmedKeyword = debouncedKeyword.trim();
  const hasKeyword = trimmedKeyword.length > 0;

  const {
    data: searchData,
    isLoading: isSearchLoading,
    fetchNextPage: fetchNextSearchPage,
    hasNextPage: hasNextSearchPage,
    isFetchingNextPage: isFetchingNextSearchPage,
  } = useSearchMulti(trimmedKeyword);

  const {
    data: topSearchData,
    isLoading: isTopSearchLoading,
    fetchNextPage: fetchNextTopSearchPage,
    hasNextPage: hasNextTopSearchPage,
    isFetchingNextPage: isFetchingNextTopSearchPage,
  } = useTopSearches();

  const topSearches = useMemo(
    () =>
      removeDuplicateItems(
        topSearchData?.pages
          .flatMap(page => page.results)
          .filter(item => item.media_type === "movie" || item.media_type === "tv")
          .filter(item => item.poster_path) ?? [],
      ),
    [topSearchData],
  );

  const searchResults = useMemo(
    () =>
      removeDuplicateItems(
        searchData?.pages
          .flatMap(page => page.results)
          .filter(item => item.media_type !== "person" && item.poster_path) ?? [],
      ),
    [searchData],
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    if (hasKeyword) {
      if (hasNextSearchPage && !isFetchingNextSearchPage && !isSearchLoading) fetchNextSearchPage();
      return;
    }
    if (hasNextTopSearchPage && !isFetchingNextTopSearchPage && !isTopSearchLoading)
      fetchNextTopSearchPage();
  };

  useIntersectionObserver(sentinelRef, handleLoadMore, scrollContainerRef);

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="pt-11">
        <SearchInput value={keyword} onChange={setKeyword} onClear={() => setKeyword("")} />
      </div>
      <div className="text-heading-1 flex items-center pt-3.5 pb-3.5 pl-4 text-white">
        {hasKeyword ? "Search Results" : "Top Searches"}
      </div>
      <div ref={scrollContainerRef} className="min-h-0 flex-1 overflow-y-auto bg-black pb-24">
        {!hasKeyword && (
          <div>
            <SearchResultList variant="top" results={topSearches} isLoading={isTopSearchLoading} />
            {isFetchingNextTopSearchPage && (
              <div className="text-body-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
            )}
          </div>
        )}
        {hasKeyword && (
          <div>
            <SearchResultList
              variant="result"
              results={searchResults}
              isLoading={isSearchLoading}
            />
            {isFetchingNextSearchPage && (
              <div className="text-body-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
            )}
          </div>
        )}
        <div ref={sentinelRef} />
      </div>
    </div>
  );
};

export default Page;
