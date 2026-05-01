import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { getPopularMovies } from "@/lib/apis/home";

const PreviewSection = async () => {
  const data = await getPopularMovies();

  return (
    <div className="bg-black">
      <p className="text-heading-1 pb-3 pl-1 text-white">Previews</p>
      <MediaCardCarousel items={data.results} shape="circle" />
    </div>
  );
};

export default PreviewSection;
