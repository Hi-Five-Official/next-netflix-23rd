import Image from "next/image";

import BackButton from "@/components/detail/BackButton";
import { getDetail } from "@/lib/apis/detail";
import { getTmdbImageUrl } from "@/lib/utils/tmdb";

interface DetailHeroProps {
  mediaType: "movie" | "tv";
  id: string;
}

const DetailHero = async ({ mediaType, id }: DetailHeroProps) => {
  const data = await getDetail(mediaType, id);

  const title = "title" in data ? data.title : data.name;
  const imagePath = data.poster_path ?? data.backdrop_path;

  return (
    <div className="relative h-103.75 w-full">
      {imagePath && (
        <Image
          src={getTmdbImageUrl(imagePath, "w500")}
          alt={title}
          fill
          sizes="375px"
          className="object-cover"
          priority
        />
      )}
      <div className="bg-gradient-thumbnail absolute inset-0" />
      <BackButton />
    </div>
  );
};

export default DetailHero;
