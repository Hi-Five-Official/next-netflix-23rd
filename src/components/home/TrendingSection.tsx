import TrendingHero from "@/components/home/TrendingHero";
import { getTrendingAll } from "@/lib/apis/home";

const TrendingSection = async () => {
  const data = await getTrendingAll();
  const top10 = data.results.filter(item => item.poster_path !== null).slice(0, 10);

  return <TrendingHero items={top10} />;
};

export default TrendingSection;
