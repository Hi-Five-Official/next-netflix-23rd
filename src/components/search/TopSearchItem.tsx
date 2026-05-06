import Image from "next/image";
import Link from "next/link";

import PlayIcon from "@/assets/icons/icon_play_circle_fill.svg";
import { TmdbMedia } from "@/types/home";

interface TopSearchItemProps {
  item: TmdbMedia;
}

const getTitle = (item: TmdbMedia) => {
  if (item.media_type === "movie") {
    return item.title;
  }

  return item.name;
};

const getImagePath = (item: TmdbMedia) => {
  return item.poster_path;
};

export default function TopSearchItem({ item }: TopSearchItemProps) {
  const title = getTitle(item);
  const imagePath = getImagePath(item);

  if (!imagePath) {
    return null;
  }

  return (
    <Link
      href={`/detail/${item.media_type}/${item.id}`}
      className="flex h-[76px] w-full overflow-hidden bg-gray-800"
    >
      <div className="rounded-2px relative h-full w-[146px] shrink-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w500${imagePath}`}
          alt={title}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      <div className="flex w-[229px] items-center justify-between py-[23px] pr-4 pl-[19px] hover:bg-gray-900">
        <p className="text-body-2 text-white">{title}</p>

        <PlayIcon className="size-7 text-white" />
      </div>
    </Link>
  );
}
