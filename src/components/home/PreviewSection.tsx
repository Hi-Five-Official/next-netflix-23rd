import Image from "next/image";

import { getPopularMovies } from "@/lib/apis/tmdb";

const PreviewSection = async () => {
  const data = await getPopularMovies();

  return (
    <div className="bg-black">
      <p className="text-heading-1 pb-3 pl-1 text-white">Previews</p>
      <div className="scrollbar-hide flex gap-1.75 overflow-x-auto">
        {data.results.map(movie => (
          <div
            key={movie.id}
            className="relative size-25.5 shrink-0 cursor-pointer overflow-hidden rounded-full"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              fill
              sizes="102px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewSection;
