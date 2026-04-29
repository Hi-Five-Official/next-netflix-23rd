"use client";

import Lottie from "lottie-react";

import AnimationNetflix from "@/assets/lottie/lottie_netflix_logo_swoop.json";

const page = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Lottie animationData={AnimationNetflix} loop={false} autoplay={true} />
    </div>
  );
};

export default page;
