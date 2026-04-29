"use client";

import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import AnimationNetflix from "@/../public/lottie_netflix_animation.json";

const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio("/audio_netflix_animation.mp3");

    audio.play().catch(error => {
      console.log("오디오 자동재생이 차단됨:", error);
    });

    const timer = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      router.push("/home");
    }, 3000);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [router]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Lottie animationData={AnimationNetflix} loop={false} autoplay={true} />
    </div>
  );
};

export default Landing;
