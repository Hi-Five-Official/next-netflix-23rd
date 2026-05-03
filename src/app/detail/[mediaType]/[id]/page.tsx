import DetailActions from "@/components/detail/DetailActions";
import DetailHero from "@/components/detail/DetailHero";
import DetailOverview from "@/components/detail/DetailOverview";

interface DetailPageProps {
  params: Promise<{ mediaType: string; id: string }>;
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
