import MediaCardSection from "@/components/home/MediaCardSection";
import { getAnimationMovies } from "@/lib/apis/tmdb";

const AnimationMoviesSection = async () => {
  const data = await getAnimationMovies();

  return <MediaCardSection title="Animation Movies" items={data.results} size="small" />;
};

export default AnimationMoviesSection;
