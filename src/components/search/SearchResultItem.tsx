import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import PlayIcon from "@/assets/icons/icon_play_circle_fill.svg";
import { TmdbMedia } from "@/types/home";
import { TmdbSearchResult } from "@/types/search";

interface SearchMediaItemProps {
  item: TmdbMedia | TmdbSearchResult;
}

const getTitle = (item: TmdbMedia | TmdbSearchResult) => {
  if (item.media_type === "movie") {
    return item.title;
  }
  return item.name;
};

const getImagePath = (item: TmdbMedia | TmdbSearchResult) => {
  if (item.media_type === "person") {
    return item.profile_path;
  }
  return item.poster_path;
};

const SearchMediaItem = memo(function SearchMediaItem({ item }: SearchMediaItemProps) {
  const title = getTitle(item);
  const imagePath = getImagePath(item);

  if (!imagePath) {
    return null;
  }

  return (
    <Link
      href={`/detail/${item.media_type}/${item.id}`}
      className="flex h-19 w-full overflow-hidden bg-gray-800"
    >
      <div className="rounded-2px relative h-full w-36.5 shrink-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w500${imagePath}`}
          alt={title}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between py-5.75 pr-4 pl-4.75 hover:bg-gray-900">
        <p className="text-body-2 min-w-0 flex-1 truncate text-white">{title}</p>
        <PlayIcon className="size-7 shrink-0 text-white" />
      </div>
    </Link>
  );
});

export default SearchMediaItem;
