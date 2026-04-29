import PreviewCarousel from "@/components/home/PreviewCarousel";
import { getPopularMovies } from "@/lib/apis/tmdb";

const PreviewSection = async () => {
  const data = await getPopularMovies();

  return (
    <div className="bg-black">
      <p className="text-heading-1 pb-3 pl-1 text-white">Previews</p>
      <PreviewCarousel movies={data.results} />
    </div>
  );
};

export default PreviewSection;
