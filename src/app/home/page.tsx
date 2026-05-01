import Header from "@/components/common/Header";
import AnimationMoviesSection from "@/components/home/AnimationMoviesSection";
import KoreanMoviesSection from "@/components/home/KoreanMoviesSection";
import NetflixOriginalsSection from "@/components/home/NetflixOriginalsSection";
import PreviewSection from "@/components/home/PreviewSection";
import TrendingSection from "@/components/home/TrendingSection";

const page = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="-mt-26 flex flex-col gap-9 pb-28">
        <TrendingSection />
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
