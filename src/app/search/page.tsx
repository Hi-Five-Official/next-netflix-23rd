"use client";

import { useCallback, useState } from "react";

import SearchInput from "@/components/search/SearchInput";
import SearchResultList from "@/components/search/SearchResultList";
import { useSearchMulti, useTopSearches } from "@/hooks/useSearchMulti";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const trimmedKeyword = keyword.trim();
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

  const topSearches =
    topSearchData?.pages
      .flatMap(page => page.results)
      .filter(item => item.media_type === "movie" || item.media_type === "tv")
      .filter(item => item.poster_path) ?? [];

  const searchResults =
    searchData?.pages
      .flatMap(page => page.results)
      .filter(item => {
        if (item.media_type === "person") {
          return false;
        }

        return item.poster_path;
      }) ?? [];

  const handleScroll = useCallback(() => {
    if (hasKeyword) {
      if (hasNextSearchPage && !isFetchingNextSearchPage && !isSearchLoading) {
        fetchNextSearchPage();
      }
      return;
    }

    if (hasNextTopSearchPage && !isFetchingNextTopSearchPage && !isTopSearchLoading) {
      fetchNextTopSearchPage();
    }
  }, [
    hasKeyword,
    hasNextSearchPage,
    isFetchingNextSearchPage,
    isSearchLoading,
    fetchNextSearchPage,
    hasNextTopSearchPage,
    isFetchingNextTopSearchPage,
    isTopSearchLoading,
    fetchNextTopSearchPage,
  ]);

  return (
    <div onScroll={handleScroll} className="h-screen overflow-y-auto bg-black pb-24">
      <div className="pt-11">
        <SearchInput value={keyword} onChange={setKeyword} onClear={() => setKeyword("")} />
      </div>
      <div className="text-heading-1 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        {hasKeyword ? "Search Results" : "Top Searches"}
      </div>

      {!hasKeyword && (
        <div>
          <SearchResultList variant="top" results={topSearches} isLoading={isTopSearchLoading} />

          {isFetchingNextTopSearchPage && (
            <div className="text-heading-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
          )}
        </div>
      )}

      {hasKeyword && (
        <div>
          <SearchResultList
            variant="result"
            results={searchResults}
            keyword={trimmedKeyword}
            isLoading={isSearchLoading}
          />

          {isFetchingNextSearchPage && (
            <div className="text-heading-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
          )}
        </div>
      )}
    </div>
  );
}
