"use client";

import Image from "next/image";

import { useDragScroll } from "@/lib/hooks/useDragScroll";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardCarouselProps {
  items: TmdbMedia[];
  size?: "small" | "large";
}

const MediaCardCarousel = ({ items, size = "small" }: MediaCardCarouselProps) => {
  const { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDragScroll();

  const cardSize = size === "small" ? "w-[103px] h-[161px]" : "w-[154px] h-[251px]";

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      className="flex cursor-pointer gap-1.75 overflow-hidden select-none"
    >
      {items.map(item => {
        const title = ("title" in item ? item.title : item.name) || "이미지 없음";

        return (
          <div
            key={item.id}
            className={`relative shrink-0 overflow-hidden rounded-[2px] ${cardSize}`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w300${item.poster_path}`}
              alt={title}
              fill
              sizes="120px"
              className="pointer-events-none object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MediaCardCarousel;
