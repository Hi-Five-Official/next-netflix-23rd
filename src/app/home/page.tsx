import Header from "@/components/home/Header";
import MediaCardSection from "@/components/home/MediaCardSection";
import PreviewSection from "@/components/home/PreviewSection";
import TrendingSection from "@/components/home/TrendingSection";
import { getAnimationMovies, getKoreanMovies, getNetflixOriginals } from "@/lib/apis/tmdb";

const page = async () => {
  const [animationMovies, koreanMovies, netflixOriginals] = await Promise.all([
    getAnimationMovies(),
    getKoreanMovies(),
    getNetflixOriginals(),
  ]);

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10">
          <Header />
        </div>
        <div className="flex flex-col gap-9">
          <TrendingSection />
          <div className="flex flex-col gap-6 pl-3">
            <PreviewSection />
            <MediaCardSection title="Netflix Originals" items={netflixOriginals.results} />
            <MediaCardSection title="Animation Movies" items={animationMovies.results} />
            <MediaCardSection title="Korean Movies" items={koreanMovies.results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
