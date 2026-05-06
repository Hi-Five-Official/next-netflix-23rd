import { memo } from "react";

import { TmdbMedia } from "@/types/home";
import { TmdbSearchResult } from "@/types/search";

import SearchResultItem from "./SearchResultItem";
import SearchResultSkeleton from "./SearchResultSkeleton";

type SearchResultListProps =
  | {
      variant: "top";
      results: TmdbMedia[];
      isLoading?: boolean;
    }
  | {
      variant: "result";
      results: TmdbSearchResult[];
      isLoading?: boolean;
    };

const SearchResultList = memo(function SearchResultList(props: SearchResultListProps) {
  const { results, isLoading = false } = props;

  if (isLoading) {
    return <SearchResultSkeleton />;
  }

  if (results.length === 0) {
    return (
      <section className="flex min-h-75 items-center justify-center px-6 text-center">
        <p className="text-body-1 text-white">검색 결과가 없습니다.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-col gap-1">
        {results.map((item, index) => (
          <SearchResultItem
            key={`${item.media_type}-${item.id}`}
            item={item}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
});

export default SearchResultList;
