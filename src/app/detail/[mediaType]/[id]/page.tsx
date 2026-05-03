import Image from "next/image";

import { PlayIcon } from "@/assets/icons";
import Button from "@/components/common/Button";
import BackButton from "@/components/detail/BackButton";
import { getDetail } from "@/lib/apis/detail";
import { getTmdbImageUrl } from "@/lib/utils/tmdb";

interface DetailPageProps {
  params: Promise<{ mediaType: string; id: string }>;
}

const page = async ({ params }: DetailPageProps) => {
  const { mediaType, id } = await params;
  const data = await getDetail(mediaType as "movie" | "tv", id);

  const title = "title" in data ? data.title : data.name;
  const imagePath = data.poster_path ?? data.backdrop_path;

  return (
    <div className="flex flex-col text-white">
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
      <div className="flex items-center justify-center pt-3">
        <Button className="w-75.5" icon={<PlayIcon className="h-4 w-3.5" />}>
          Play
        </Button>
      </div>
      <div className="flex flex-col px-7 pt-8">
        <p className="text-heading-1 pb-3 pl-1.5">Previews</p>
        <p className="text-caption-1">{data.overview || "줄거리가 없습니다."}</p>
      </div>
    </div>
  );
};

export default page;
