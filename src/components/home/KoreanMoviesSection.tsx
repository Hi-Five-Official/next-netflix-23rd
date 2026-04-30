import MediaCardSection from "@/components/home/MediaCardSection";
import { getKoreanMovies } from "@/lib/apis/tmdb";

const KoreanMoviesSection = async () => {
  const data = await getKoreanMovies();

  return <MediaCardSection title="Korean Movies" items={data.results} size="small" />;
};

export default KoreanMoviesSection;
