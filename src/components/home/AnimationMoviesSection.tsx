import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { getAnimationMovies } from "@/lib/apis/tmdb";

const AnimationMoviesSection = async () => {
  const data = await getAnimationMovies();

  return (
    <div className="bg-black">
      <p className="text-heading-2 pb-3 pl-1 text-white">Animation Movies</p>
      <MediaCardCarousel items={data.results} size="small" />
    </div>
  );
};

export default AnimationMoviesSection;
