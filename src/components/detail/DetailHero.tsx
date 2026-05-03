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
      <div className="absolute bottom-4 left-0 w-full px-4">
        <h1 className="text-heading-1">{title}</h1>
        {data.genres.length > 0 && (
          <p className="text-caption-1 mt-1 text-gray-300">
            {data.genres.map(g => g.name).join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailHero;
