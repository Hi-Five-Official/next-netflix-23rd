import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { getMediaTitle, getMediaType, getTmdbImageUrl } from "@/lib/utils/tmdb";
import { TmdbMedia } from "@/types/home";

interface MediaThumbnailProps {
  item: TmdbMedia;
  shape?: "rect" | "circle";
  size?: "small" | "large";
}

const MediaThumbnail = memo(function MediaThumbnail({
  item,
  shape = "rect",
  size = "small",
}: MediaThumbnailProps) {
  const title = getMediaTitle(item);
  const mediaType = getMediaType(item);

  const href = `/detail/${mediaType}/${item.id}`;

  if (shape === "circle") {
    return (
      <Link href={href}>
        <div className="relative size-25.5 shrink-0 overflow-hidden rounded-full">
          <Image
            src={getTmdbImageUrl(item.poster_path ?? "", "w185")}
            alt={title}
            fill
            sizes="102px"
            className="object-cover"
          />
        </div>
      </Link>
    );
  }

  const cardSize = size === "small" ? "w-25.75 h-44.25" : "w-38.5 h-62.75";
  const imageSizes = size === "small" ? "103px" : "154px";

  return (
    <Link href={href}>
      <div className={`relative shrink-0 overflow-hidden rounded-xs ${cardSize}`}>
        <Image
          src={getTmdbImageUrl(item.poster_path ?? "", "w300")}
          alt={title}
          fill
          sizes={imageSizes}
          className="object-cover"
        />
      </div>
    </Link>
  );
});

export default MediaThumbnail;
