"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { InfoIcon, PlayIcon, PlusIcon } from "@/assets/icons";
import Button from "@/components/common/Button";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import { TmdbMedia } from "@/types/home";

interface TrendingSectionProps {
  items: TmdbMedia[];
}

const TrendingSection = ({ items }: TrendingSectionProps) => {
  const router = useRouter();
  const [currentId, setCurrentId] = useState(items[0].id);
  const [currentType, setCurrentType] = useState(items[0].media_type);

  const handleCurrentChange = useCallback((id: number, mediaType: "movie" | "tv") => {
    setCurrentId(id);
    setCurrentType(mediaType);
  }, []);

  return (
    <div className="flex flex-col gap-3.5">
      <TrendingCarousel items={items} onCurrentChange={handleCurrentChange} />
      <div className="flex flex-row items-center justify-center gap-11">
        <button className="flex cursor-pointer flex-col items-center gap-0.5 text-white transition-all duration-300 hover:text-gray-700">
          <PlusIcon className="size-6" />
          <span className="text-caption-1">My List</span>
        </button>
        <Button className="w-27" icon={<PlayIcon className="h-4.5 w-3.5" />}>
          Play
        </Button>
        <button
          onClick={() => router.push(`/detail/${currentType}/${currentId}`)}
          className="flex cursor-pointer flex-col items-center gap-0.75 text-white transition-all duration-300 hover:text-gray-700"
        >
          <InfoIcon className="size-6" />
          <span className="text-caption-1">Info</span>
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
