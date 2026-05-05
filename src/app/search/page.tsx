"use client";

import { useState } from "react";

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
    isError: isSearchError,
  } = useSearchMulti(trimmedKeyword);

  const {
    data: topSearchData,
    isLoading: isTopSearchLoading,
    isError: isTopSearchError,
  } = useTopSearches();

  const topSearches =
    topSearchData?.results
      .filter(item => item.media_type === "movie" || item.media_type === "tv")
      .filter(item => item.poster_path)
      .slice(0, 10) ?? [];

  const searchResults =
    searchData?.results.filter(item => {
      if (item.media_type === "person") {
        return false;
      }

      return item.poster_path;
    }) ?? [];

  return (
    <div>
      <div className="pt-11">
        <SearchInput value={keyword} onChange={setKeyword} onClear={() => setKeyword("")} />
      </div>
      <div className="text-heading-1 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        {hasKeyword ? "Search Results" : "Top Searches"}
      </div>

      {!hasKeyword && !isTopSearchError && (
        <SearchResultList variant="top" results={topSearches} isLoading={isTopSearchLoading} />
      )}

      {hasKeyword && !isSearchError && (
        <SearchResultList
          variant="result"
          results={searchResults}
          keyword={trimmedKeyword}
          isLoading={isSearchLoading}
        />
      )}
    </div>
  );
}
