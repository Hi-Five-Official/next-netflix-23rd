"use client";

import type { UIEvent } from "react";
import { useCallback, useState } from "react";

import SearchInput from "@/components/search/SearchInput";
import SearchResultList from "@/components/search/SearchResultList";
import { useSearchMulti, useTopSearches } from "@/lib/hooks/useSearchMulti";

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

  const removeDuplicateItems = <T extends { id: number; media_type: string }>(items: T[]) => {
    return Array.from(new Map(items.map(item => [`${item.media_type}-${item.id}`, item])).values());
  };
  // 중복된 항목 제거. 뒤에 나온 데이터가 앞의 데이터를 덮어씀

  const topSearches = removeDuplicateItems(
    topSearchData?.pages
      .flatMap(page => page.results)
      .filter(item => item.media_type === "movie" || item.media_type === "tv")
      .filter(item => item.poster_path) ?? [],
  );

  const searchResults = removeDuplicateItems(
    searchData?.pages
      .flatMap(page => page.results)
      .filter(item => {
        if (item.media_type === "person") {
          return false;
        }

        return item.poster_path;
      }) ?? [],
  );

  const handleScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget;
      const isBottom = target.scrollTop + target.clientHeight >= target.scrollHeight;
      // scrollTop: 현재 위에서부터 얼마나 스크롤 되었는지. clientHeight: 화면에 보이는 영역의 높이. scrollHeight: 전체 스크롤 가능한 영역의 높이.

      if (!isBottom) {
        return;
      }
      // 스크롤이 바닥에 닿았을 때  true 반환

      if (hasKeyword) {
        if (hasNextSearchPage && !isFetchingNextSearchPage && !isSearchLoading) {
          fetchNextSearchPage();
        }
        return;
      }

      if (hasNextTopSearchPage && !isFetchingNextTopSearchPage && !isTopSearchLoading) {
        fetchNextTopSearchPage();
      }
    },
    [
      hasKeyword,
      hasNextSearchPage,
      isFetchingNextSearchPage,
      isSearchLoading,
      fetchNextSearchPage,
      hasNextTopSearchPage,
      isFetchingNextTopSearchPage,
      isTopSearchLoading,
      fetchNextTopSearchPage,
    ],
  );

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="pt-11">
        <SearchInput value={keyword} onChange={setKeyword} onClear={() => setKeyword("")} />
      </div>
      <div className="text-heading-1 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        {hasKeyword ? "Search Results" : "Top Searches"}
      </div>

      <div onScroll={handleScroll} className="min-h-0 flex-1 overflow-y-auto bg-black pb-24">
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
              isLoading={isSearchLoading}
            />

            {isFetchingNextSearchPage && (
              <div className="text-heading-1 py-4 text-center text-gray-600">더 불러오는 중...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
