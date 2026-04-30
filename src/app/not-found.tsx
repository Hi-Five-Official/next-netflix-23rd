import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button";
import Header from "@/components/home/Header";

const page = () => {
  return (
    <div className="relative h-[90vh]">
      <Image
        src="/images/notfound_background.jpg"
        alt="Not Found Background"
        fill
        sizes="375px"
        loading="eager"
        className="w-full object-cover"
      />
      <div className="bg-gradient-thumbnail absolute inset-0" />
      <div className="absolute inset-x-0 top-0 z-10">
        <Header />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center gap-5 px-5">
        <h1 className="text-center text-[45px] leading-[135%] font-extrabold tracking-[-0.8px] text-white">
          Lost your way?
        </h1>
        <h2 className="text-body-2 text-center text-white">
          Sorry, we can’t find that page. <br />
          You’ll find lots to explore on the <br /> home page.
        </h2>
        <Link href="/home">
          <Button className="w-30 text-[16px] leading-[135%] font-bold tracking-[-0.32px]">
            Netflix Home
          </Button>
        </Link>
        <p className="text-caption-1 mt-25 flex gap-2 text-white">
          <span className="text-red-600">|</span> Error Code
          <span className="font-bold">NSES-404</span>
        </p>
      </div>
    </div>
  );
};

export default page;
