"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Genres = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <div>Genres</div>;
};

export default Genres;
