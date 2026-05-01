import Image from "next/image";

import { TmdbMedia } from "@/types/tmdb";

interface MediaCardProps {
  item: TmdbMedia;
  size?: "small" | "large";
}

const MediaCard = ({ item, size = "small" }: MediaCardProps) => {
  const title = ("title" in item ? item.title : item.name) || "이미지 없음";
  const cardSize = size === "small" ? "w-25.75 h-44.25" : "w-38.5 h-62.75";

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-xs ${cardSize}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w300${item.poster_path}`}
        alt={title}
        fill
        sizes="120px"
        className="pointer-events-none object-cover"
      />
    </div>
  );
};

export default MediaCard;
