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
  return <div>Logout</div>;
};

export default Logout;
