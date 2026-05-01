"use client";

import MediaCard from "@/components/home/MediaCard";
import { useDragScroll } from "@/lib/hooks/useDragScroll";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardCarouselProps {
  items: TmdbMedia[];
  size?: "small" | "large";
}

const MediaCardCarousel = ({ items, size = "small" }: MediaCardCarouselProps) => {
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
      {items.map(item => (
        <MediaCard key={item.id} item={item} size={size} />
      ))}
    </div>
  );
};

export default MediaCardCarousel;
