"use client";

import React, { useEffect, useState } from "react";
import { AddShow, CategoryNavbar, Navbar } from "@/components/ui";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
const FullNavbar = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isAddFormClose, setIsAddFormClose] = useState(true);
  const toggleAddForm = () => {
    setIsAddFormClose((prev) => !prev);
  };

  const AddFormClose = (boolValue) => {
    setIsAddFormClose(boolValue);
  };

  const getCookieSetLoginState = async () => {
    const res = await fetch("/api/auth/authloging", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (data.login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    setIsAddFormClose(true);
    getCookieSetLoginState();
  }, []);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div className="w-full h-fit items-start">
      <Navbar isLogin={isLogin} toggleAddForm={toggleAddForm} />
      <hr className="my-4 opacity-10" />
      <CategoryNavbar />
      <hr className="mt-4 opacity-10" />
      <AddShow isAddFormClose={isAddFormClose} AddFormClose={AddFormClose} />
    </div>
  );
};

export default FullNavbar;
