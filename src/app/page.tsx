"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AnimationNetflix from "@/../public/lottie_netflix_animation.json";

const Landing = () => {
  const router = useRouter();
  const [started, setStarted] = useState(false);

  const handleStart = async () => {
    if (started) return;
    setStarted(true);
    const audio = new Audio("/audio_netflix_animation.mp3");

    try {
      await audio.play();
    } catch (error) {
      console.error("오디오 재생 실패:", error);
    }

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      router.push("/home");
    }, 3000);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {!started ? (
        <button type="button" onClick={handleStart} className="cursor-pointer">
          <Image src="/og_image.png" alt="btnNetflix" width={300} height={300} />
        </button>
      ) : (
        <Lottie animationData={AnimationNetflix} loop={false} />
      )}
    </div>
  );
};

export default Landing;
