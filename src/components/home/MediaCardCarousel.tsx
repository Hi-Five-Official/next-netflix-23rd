"use client";

import Image from "next/image";

import { useDragScroll } from "@/lib/hooks/useDragScroll";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardCarouselProps {
  items: TmdbMedia[];
}

const MediaCardCarousel = ({ items }: MediaCardCarouselProps) => {
  const { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDragScroll();

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
          <div key={item.id} className="relative h-[10rem] w-[6.4375rem] shrink-0 overflow-hidden">
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
