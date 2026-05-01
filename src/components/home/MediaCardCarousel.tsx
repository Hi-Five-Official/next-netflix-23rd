import DragScrollCarousel from "@/components/home/DragScrollCarousel";
import MediaThumbnail from "@/components/home/MediaThumbnail";
import { TmdbMedia } from "@/types/tmdb";

interface MediaCardCarouselProps {
  items: TmdbMedia[];
  shape?: "rect" | "circle";
  size?: "small" | "large";
}

const MediaCardCarousel = ({ items, shape = "rect", size = "small" }: MediaCardCarouselProps) => {
  return (
    <DragScrollCarousel>
      {items.map(item => (
        <MediaThumbnail key={item.id} item={item} shape={shape} size={size} />
      ))}
    </DragScrollCarousel>
  );
};

export default MediaCardCarousel;
