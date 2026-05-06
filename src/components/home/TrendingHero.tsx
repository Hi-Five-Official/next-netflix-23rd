"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { InfoIcon, PlayIcon, PlusIcon, Top10Icon } from "@/assets/icons";
import Button from "@/components/common/Button";
import { getMediaTitle, getMediaType, getTmdbImageUrl } from "@/lib/utils/tmdb";
import { TmdbMedia } from "@/types/home";

interface TrendingHeroProps {
  items: TmdbMedia[];
}

const TrendingHero = ({ items }: TrendingHeroProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    let timer: ReturnType<typeof setInterval>;

    const start = () => {
      timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % items.length);
      }, 4000);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        clearInterval(timer);
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [items.length]);

  const currentItem = items[current];
  const mediaType = getMediaType(currentItem);

  return (
    <div className="flex flex-col gap-3.5">
      <div className="relative h-103.75 w-full">
        {items.map((item, index) => (
          <Image
            key={item.id}
            src={getTmdbImageUrl(item.poster_path ?? "", "w500")}
            alt={getMediaTitle(item) || "이미지 없음"}
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
      <div className="flex flex-row items-center justify-center gap-11">
        <button className="flex cursor-pointer flex-col items-center gap-0.5 text-white transition-all duration-300 hover:text-gray-700">
          <PlusIcon className="size-6" />
          <span className="text-caption-1">My List</span>
        </button>
        <Button className="w-27" icon={<PlayIcon className="h-4.5 w-3.5" />}>
          Play
        </Button>
        <button
          onClick={() => router.push(`/detail/${mediaType}/${currentItem.id}`)}
          className="flex cursor-pointer flex-col items-center gap-0.75 text-white transition-all duration-300 hover:text-gray-700"
        >
          <InfoIcon className="size-6" />
          <span className="text-caption-1">Info</span>
        </button>
      </div>
    </div>
  );
};

export default TrendingHero;
