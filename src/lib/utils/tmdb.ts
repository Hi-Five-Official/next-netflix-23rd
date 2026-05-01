import { TmdbMedia } from "@/types/home";

type TmdbImageSize = "w185" | "w300" | "w500";

export const getTmdbImageUrl = (path: string, size: TmdbImageSize) =>
  `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/${size}${path}`;

export const getMediaTitle = (item: TmdbMedia): string =>
  "title" in item ? item.title : item.name;

export const getMediaType = (item: TmdbMedia): "movie" | "tv" => ("title" in item ? "movie" : "tv");
