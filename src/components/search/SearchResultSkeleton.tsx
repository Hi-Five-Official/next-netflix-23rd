const SearchResultSkeletonItem = () => (
  <div className="flex h-19 w-full animate-pulse overflow-hidden bg-gray-800">
    <div className="h-full w-36.5 shrink-0 bg-gray-700" />
    <div className="flex flex-1 items-center px-4">
      <div className="h-4 w-2/3 rounded bg-gray-700" />
    </div>
  </div>
);

const SearchResultSkeleton = ({ count = 8 }: { count?: number }) => (
  <section>
    <div className="flex flex-col gap-1">
      {Array.from({ length: count }, (_, i) => (
        <SearchResultSkeletonItem key={i} />
      ))}
    </div>
  </section>
);

export default SearchResultSkeleton;
