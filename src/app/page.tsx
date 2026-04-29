"use client";

import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import AnimationNetflix from "@/assets/lottie/lottie_netflix_logo_swoop.json";

const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Lottie animationData={AnimationNetflix} loop={false} autoplay={true} />
    </div>
  );
};

export default Landing;
