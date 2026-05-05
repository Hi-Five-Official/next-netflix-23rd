"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { NetflixIcon } from "@/assets/icons";
import AnimationNetflix from "@/public/lotties/lottie_netflix_animation.json";

const Page = () => {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleStart = async () => {
    if (started) return;
    setStarted(true);
    const audio = new Audio("/sounds/audio_netflix_animation.mp3");
    audioRef.current = audio;

    try {
      await audio.play();
    } catch (error) {
      console.error("오디오 재생 실패:", error);
    }
  };

  const handleComplete = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    router.push("/home");
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {!started ? (
        <button type="button" onClick={handleStart} className="cursor-pointer">
          <NetflixIcon className="w-75 transition-transform duration-300 hover:scale-110" />
        </button>
      ) : (
        <Lottie animationData={AnimationNetflix} loop={false} onComplete={handleComplete} />
      )}
    </div>
  );
};

export default Page;
