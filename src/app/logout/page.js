"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/");
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-xl">
      Logout
    </div>
  );
};

export default Logout;
