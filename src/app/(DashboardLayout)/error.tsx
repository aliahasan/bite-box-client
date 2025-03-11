"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center mt-20">
      <h2 className="text-red-500">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
