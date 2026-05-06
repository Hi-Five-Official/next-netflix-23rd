"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";

import SearchInput from "@/components/search/SearchInput";
import SearchResultSkeleton from "@/components/search/SearchResultSkeleton";
import { useDebounce } from "@/lib/hooks/useDebounce";

const TopSearchContent = dynamic(() => import("@/components/search/TopSearchContent"), {
  ssr: false,
});
const SearchContent = dynamic(() => import("@/components/search/SearchContent"), { ssr: false });

const Page = () => {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 300);
  const trimmedKeyword = debouncedKeyword.trim();
  const hasKeyword = trimmedKeyword.length > 0;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="pt-11">
        <SearchInput value={keyword} onChange={setKeyword} onClear={() => setKeyword("")} />
      </div>
      <div className="text-heading-1 flex items-center pt-3.5 pb-3.5 pl-4 text-white">
        {hasKeyword ? "Search Results" : "Top Searches"}
      </div>
      <div ref={scrollContainerRef} className="min-h-0 flex-1 overflow-y-auto bg-black pb-24">
        {hasKeyword ? (
          <Suspense fallback={<SearchResultSkeleton />}>
            <SearchContent keyword={trimmedKeyword} scrollContainerRef={scrollContainerRef} />
          </Suspense>
        ) : (
          <Suspense fallback={<SearchResultSkeleton />}>
            <TopSearchContent scrollContainerRef={scrollContainerRef} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Page;
