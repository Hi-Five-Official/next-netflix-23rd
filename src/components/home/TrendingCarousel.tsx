"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Top10Icon } from "@/assets/icons";
import { getTmdbImageUrl } from "@/lib/utils/tmdb";
import { TmdbMedia } from "@/types/tmdb";

interface TrendingCarouselProps {
  items: TmdbMedia[];
}

const TrendingCarousel = ({ items }: TrendingCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div>
      <div className="relative h-103.75 w-full">
        {items.map((item, index) => (
          <Image
            key={item.id}
            src={getTmdbImageUrl(item.poster_path ?? "", "w500")}
            alt={("title" in item ? item.title : item.name) || "이미지 없음"}
            fill
            sizes="375px"
            className={`object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
            priority={index === 0}
          />
        ))}
        <div className="bg-gradient-thumbnail absolute inset-0" />
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1.5 text-white">
          <Top10Icon className="size-3.75" />
          <span className="text-[13.723px] leading-5 font-bold tracking-[-0.041px] whitespace-nowrap">
            #{current + 1} in Korea Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCarousel;
