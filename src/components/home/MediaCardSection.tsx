import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardSectionProps {
  title: string;
  items: TmdbMedia[];
}

const MediaCardSection = ({ title, items }: MediaCardSectionProps) => {
  return (
    <div className="bg-black">
      <p className="text-heading-2 pb-3 pl-1 text-white">{title}</p>
      <MediaCardCarousel items={items} />
    </div>
  );
};

export default MediaCardSection;
