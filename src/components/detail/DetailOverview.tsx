import { getDetail } from "@/lib/apis/detail";

interface DetailOverviewProps {
  mediaType: "movie" | "tv";
  id: string;
}

const DetailOverview = async ({ mediaType, id }: DetailOverviewProps) => {
  const data = await getDetail(mediaType, id);

  return (
    <div className="flex flex-col px-7 pt-8">
      <p className="text-heading-1 pb-3 pl-1.5">Previews</p>
      <p className="text-caption-1">{data.overview || "줄거리가 없습니다."}</p>
    </div>
  );
};

export default DetailOverview;
