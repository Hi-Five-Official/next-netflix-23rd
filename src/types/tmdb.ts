interface TmdbBase {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  softcore: boolean;
}

export interface TmdbMovie extends TmdbBase {
  media_type: "movie";
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  video: boolean;
}

export interface TmdbTv extends TmdbBase {
  media_type: "tv";
  name: string;
  original_name: string;
  original_language: string;
  first_air_date: string;
  origin_country: string[];
}

export type TmdbMedia = TmdbMovie | TmdbTv;

export interface TmdbPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type TrendingAllResponse = TmdbPaginatedResponse<TmdbMedia>;
export type PopularMoviesResponse = TmdbPaginatedResponse<TmdbMovie>;
