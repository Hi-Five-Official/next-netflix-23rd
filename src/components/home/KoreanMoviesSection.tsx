import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { getKoreanMovies } from "@/lib/apis/home";

const KoreanMoviesSection = async () => {
  const data = await getKoreanMovies();

  return (
    <div className="bg-black">
      <p className="text-heading-2 pb-3 pl-1 text-white">Korean Movies</p>
      <MediaCardCarousel items={data.results} size="small" />
    </div>
  );
};

export default KoreanMoviesSection;
