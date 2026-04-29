import { InfoIcon, PlayIcon, PlusIcon } from "@/assets/icons";
import Button from "@/components/common/Button";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import { getTrendingAll } from "@/lib/apis/tmdb";

const TrendingSection = async () => {
  const data = await getTrendingAll();
  const top10 = data.results.filter(item => item.poster_path !== null).slice(0, 10);

  return (
    <div className="flex flex-col gap-3.5">
      <TrendingCarousel items={top10} />
      <div className="flex flex-row items-center justify-center gap-11">
        <button className="flex cursor-pointer flex-col items-center gap-0.5 text-white transition-all duration-300 hover:text-gray-700">
          <PlusIcon className="size-6" />
          <span className="text-caption-1">My List</span>
        </button>
        <Button className="w-27" icon={<PlayIcon className="h-4.5 w-3.5" />}>
          Play
        </Button>
        <button className="flex cursor-pointer flex-col items-center gap-0.75 text-white transition-all duration-300 hover:text-gray-700">
          <InfoIcon className="size-6" />
          <span className="text-caption-1">Info</span>
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
