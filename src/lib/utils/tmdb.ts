type TmdbImageSize = "w185" | "w300" | "w500";

export const getTmdbImageUrl = (path: string, size: TmdbImageSize) =>
  `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/${size}${path}`;
