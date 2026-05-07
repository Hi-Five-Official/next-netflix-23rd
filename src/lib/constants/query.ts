export const QUERY_STALE_TIME = 1000 * 60 * 5;
export const TOP_SEARCHES_STALE_TIME = 1000 * 60 * 10;
export const QUERY_GC_TIME = 1000 * 60 * 10;

export const QUERY_KEYS = {
  search: (keyword: string) => ["search", keyword] as const,
  topSearches: ["top-searches"] as const,
} as const;
