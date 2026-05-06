"use client";

import { useRouter } from "next/navigation";

import { XIcon } from "@/assets/icons";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="z-overlay absolute top-4 right-4 cursor-pointer text-white"
    >
      <XIcon className="size-6" />
    </button>
  );
};

export default BackButton;
