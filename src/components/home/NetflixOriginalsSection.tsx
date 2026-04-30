import MediaCardSection from "@/components/home/MediaCardSection";
import { getNetflixOriginals } from "@/lib/apis/tmdb";

const NetflixOriginalsSection = async () => {
  const data = await getNetflixOriginals();

  return <MediaCardSection title="Netflix Originals" items={data.results} size="large" />;
};

export default NetflixOriginalsSection;
