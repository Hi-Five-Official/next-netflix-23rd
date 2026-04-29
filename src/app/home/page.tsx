import Header from "@/components/home/Header";
import PreviewSection from "@/components/home/PreviewSection";
import TrendingSection from "@/components/home/TrendingSection";

const page = () => {
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
            {/* 하단 섹션들 추가*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
