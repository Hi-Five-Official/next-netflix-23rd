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

export type MovieListResponse = TmdbPaginatedResponse<TmdbMovie>;
export type TvListResponse = TmdbPaginatedResponse<TmdbTv>;

// Detail 공통
interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface DetailBase {
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  homepage: string;
  id: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  softcore: boolean;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

// Movie Detail
export interface MovieDetailResponse extends DetailBase {
  title: string;
  original_title: string;
  release_date: string;
  runtime: number | null;
  budget: number;
  revenue: number;
  video: boolean;
}

// TV Detail
interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

interface Network {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface TvDetailResponse extends DetailBase {
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode | null;
  name: string;
  next_episode_to_air: Episode | null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  seasons: Season[];
  type: string;
}
