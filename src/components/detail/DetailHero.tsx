import Image from "next/image";

import BackButton from "@/components/detail/BackButton";
import { getTmdbImageUrl } from "@/lib/utils/tmdb";
import { MovieDetailResponse, TvDetailResponse } from "@/types/detail";

interface DetailHeroProps {
  data: MovieDetailResponse | TvDetailResponse;
}

const DetailHero = ({ data }: DetailHeroProps) => {
  const title = "title" in data ? data.title : data.name;
  const imagePath = data.poster_path ?? data.backdrop_path;

  return (
    <div className="relative h-103.75 w-full">
      {imagePath && (
        <Image
          src={getTmdbImageUrl(imagePath, "w780")}
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
