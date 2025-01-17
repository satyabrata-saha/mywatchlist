"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Genres = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-xl">
      Genres
    </div>
  );
};

export default Genres;
