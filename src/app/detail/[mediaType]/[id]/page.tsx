import type { Metadata } from "next";

import DetailActions from "@/components/detail/DetailActions";
import DetailHero from "@/components/detail/DetailHero";
import DetailOverview from "@/components/detail/DetailOverview";
import { getDetail } from "@/lib/apis/detail";
import { getTmdbImageUrl } from "@/lib/utils/tmdb";

interface DetailPageProps {
  params: Promise<{ mediaType: string; id: string }>;
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { mediaType, id } = await params;
  const detail = await getDetail(mediaType as "movie" | "tv", id);
  const title = "title" in detail ? detail.title : detail.name;
  const imageUrl = detail.backdrop_path
    ? getTmdbImageUrl(detail.backdrop_path, "original")
    : undefined;

  return {
    title: `${title} | Next Netflix`,
    description: detail.overview.slice(0, 160),
    openGraph: {
      title,
      description: detail.overview,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1280, height: 720 }] }),
    },
    twitter: { card: "summary_large_image" },
  };
}

const page = async ({ params }: DetailPageProps) => {
  const { mediaType, id } = await params;

  return (
    <div className="flex flex-col text-white">
      <DetailHero mediaType={mediaType as "movie" | "tv"} id={id} />
      <DetailActions />
      <DetailOverview mediaType={mediaType as "movie" | "tv"} id={id} />
    </div>
  );
};

export default page;
