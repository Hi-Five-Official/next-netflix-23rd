"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-black text-white">
      <p className="text-body-1 text-gray-400">문제가 발생했습니다.</p>
      <button onClick={reset} className="text-body-2 rounded-sm bg-white px-4 py-2 text-black">
        다시 시도
      </button>
    </div>
  );
};

export default Error;
