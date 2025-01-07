import toastMessage from "@/lib/toastMessage";
import React from "react";

const Logout = ({ hidden }) => {
  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    toastMessage(data.message);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium py-1 px-3.5 rounded-full transition-all duration-150 ease-in-out"
      hidden={hidden}
    >
      Logout
    </button>
  );
};

export default Logout;
