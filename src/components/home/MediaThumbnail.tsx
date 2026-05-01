import Image from "next/image";

import { getTmdbImageUrl } from "@/lib/utils/tmdb";
import { TmdbMedia } from "@/types/tmdb";

interface MediaThumbnailProps {
  item: TmdbMedia;
  shape?: "rect" | "circle";
  size?: "small" | "large";
}

const MediaThumbnail = ({ item, shape = "rect", size = "small" }: MediaThumbnailProps) => {
  const title = ("title" in item ? item.title : item.name) || "이미지 없음";

  if (shape === "circle") {
    return (
      <div className="relative size-25.5 shrink-0 overflow-hidden rounded-full">
        <Image
          src={getTmdbImageUrl(item.poster_path ?? "", "w185")}
          alt={title}
          fill
          sizes="102px"
          className="pointer-events-none object-cover"
        />
      </div>
    );
  }

  const cardSize = size === "small" ? "w-25.75 h-44.25" : "w-38.5 h-62.75";

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-xs ${cardSize}`}>
      <Image
        src={getTmdbImageUrl(item.poster_path ?? "", "w300")}
        alt={title}
        fill
        sizes="120px"
        className="pointer-events-none object-cover"
      />
    </div>
  );
};

export default MediaThumbnail;
