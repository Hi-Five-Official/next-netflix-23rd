import { getDetail } from "@/lib/apis/detail";

interface DetailPageProps {
  params: Promise<{ mediaType: string; id: string }>;
}

const page = async ({ params }: DetailPageProps) => {
  const { mediaType, id } = await params;
  const data = await getDetail(mediaType as "movie" | "tv", id);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 text-white">
      <p>타입: {mediaType}</p>
      <p>id: {id}</p>
      <p>{data.overview || "줄거리가 없습니다."}</p>
    </div>
  );
};

export default page;
