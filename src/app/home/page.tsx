import Header from "@/components/common/Header";
import AnimationMoviesSection from "@/components/home/AnimationMoviesSection";
import KoreanMoviesSection from "@/components/home/KoreanMoviesSection";
import NetflixOriginalsSection from "@/components/home/NetflixOriginalsSection";
import PreviewSection from "@/components/home/PreviewSection";
import TrendingSection from "@/components/home/TrendingSection";
import { getTrendingAll } from "@/lib/apis/home";

const page = async () => {
  const data = await getTrendingAll();
  const top10 = data.results.filter(item => item.poster_path !== null).slice(0, 10);

  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="-mt-26 flex flex-col gap-9 pb-28">
        <TrendingSection items={top10} />
        <div className="flex flex-col gap-6 pl-3">
          <PreviewSection />
          <NetflixOriginalsSection />
          <AnimationMoviesSection />
          <KoreanMoviesSection />
        </div>
      </div>
    </div>
  );
};

export default page;
