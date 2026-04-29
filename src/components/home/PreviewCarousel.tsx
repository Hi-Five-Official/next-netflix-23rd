"use client";

import Image from "next/image";

import { useDragScroll } from "@/lib/hooks/useDragScroll";
import { TmdbMovie } from "@/types/tmdb";

interface PreviewCarouselProps {
  movies: TmdbMovie[];
}

const PreviewCarousel = ({ movies }: PreviewCarouselProps) => {
  const { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDragScroll();

  return (
    <div
      ref={ref}
      className="flex cursor-grab gap-1.75 overflow-hidden select-none active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {movies.map(movie => (
        <div key={movie.id} className="relative size-25.5 shrink-0 overflow-hidden rounded-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="102px"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PreviewCarousel;
