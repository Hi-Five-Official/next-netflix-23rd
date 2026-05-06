import { TmdbMedia } from "@/types/home";
import { TmdbSearchResult } from "@/types/search";

import SearchResultItem from "./SearchResultItem";
import TopSearchItem from "./TopSearchItem";

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

export default function SearchResultList(props: SearchResultListProps) {
  const { variant, results, isLoading = false } = props;

  if (isLoading) {
    return (
      <section className="px-6 pt-4">
        <p className="text-sm text-gray-500">불러오는 중...</p>
      </section>
    );
  }

  if (variant === "top") {
    return (
      <section>
        <div className="flex flex-col gap-1">
          {results.map(item => (
            <TopSearchItem key={`${item.media_type}-${item.id}`} item={item} />
          ))}
        </div>
      </section>
    );
  }

  if (results.length === 0) {
    return (
      <section className="flex min-h-[300px] items-center justify-center px-6 text-center">
        <p className="text-sm text-white">검색 결과가 없습니다.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-col gap-1">
        {results.map(item => (
          <SearchResultItem key={`${item.media_type}-${item.id}`} item={item} />
        ))}
      </div>
    </section>
  );
}
