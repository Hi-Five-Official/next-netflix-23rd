import Header from "@/components/home/Header";
import TrendingSection from "@/components/home/TrendingSection";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10">
          <Header />
        </div>
        <TrendingSection />
      </div>
    </div>
  );
};

export default page;
