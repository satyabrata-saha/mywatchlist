"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Status = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-xl">
      Status
    </div>
  );
};

export default Status;
