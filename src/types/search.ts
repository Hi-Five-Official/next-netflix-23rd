interface TmdbSearchBase {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface TmdbSearchMovie extends TmdbSearchBase {
  media_type: "movie";
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  video: boolean;
}

export interface TmdbSearchTv extends TmdbSearchBase {
  media_type: "tv";
  name: string;
  original_name: string;
  original_language: string;
  first_air_date: string;
  origin_country: string[];
}

export interface TmdbSearchPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  media_type: "person";
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export type TmdbSearchResult = TmdbSearchMovie | TmdbSearchTv | TmdbSearchPerson;

export interface TmdbSearchPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type SearchResponse = TmdbSearchPaginatedResponse<TmdbSearchResult>;
