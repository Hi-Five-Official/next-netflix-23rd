import { MovieDetailResponse, TvDetailResponse } from "@/types/detail";

interface DetailOverviewProps {
  data: MovieDetailResponse | TvDetailResponse;
}

const DetailOverview = ({ data }: DetailOverviewProps) => {
  const title = "title" in data ? data.title : data.name;

  return (
    <div className="flex flex-col px-7 pt-8">
      <h1 className="text-heading-1 pb-1 pl-1.5">{title}</h1>
      {data.genres.length > 0 && (
        <p className="text-caption-1 pb-3 pl-1.5 text-gray-300">
          {data.genres.map(g => g.name).join(" · ")}
        </p>
      )}
      <p className="text-caption-1">{data.overview || "줄거리가 없습니다."}</p>
    </div>
  );
};

export default DetailOverview;
