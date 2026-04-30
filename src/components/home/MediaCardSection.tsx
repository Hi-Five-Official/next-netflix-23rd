import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardSectionProps {
  title: string;
  items: TmdbMedia[];
  size?: "small" | "large";
}

const MediaCardSection = ({ title, items, size = "small" }: MediaCardSectionProps) => {
  return (
    <div className="bg-black">
      <p className="text-heading-2 pb-3 pl-1 text-white">{title}</p>
      <MediaCardCarousel items={items} size={size} />
    </div>
  );
};

export default MediaCardSection;
