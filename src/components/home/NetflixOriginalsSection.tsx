import MediaCardCarousel from "@/components/home/MediaCardCarousel";
import { getNetflixOriginals } from "@/lib/apis/home";

const NetflixOriginalsSection = async () => {
  const data = await getNetflixOriginals();

  return (
    <div className="bg-black">
      <p className="text-heading-2 pb-3 pl-1 text-white">Netflix Originals</p>
      <MediaCardCarousel items={data.results} size="large" />
    </div>
  );
};

export default NetflixOriginalsSection;
