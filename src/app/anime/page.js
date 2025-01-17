"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Anime = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-xl">
      Anime
    </div>
  );
};

export default Anime;
