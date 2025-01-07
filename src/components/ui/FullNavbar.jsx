"use client";
import React, { useEffect, useState } from "react";
import {
  AddShow,
  CategoryNavbar,
  Navbar,
  SearchBar,
  StatusNavbar,
} from "@/components/ui";
import { useRouter } from "next/navigation";

const FullNavbar = ({ search, hidden = false }) => {
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

  return (
    <div className="w-full h-fit items-start">
      <Navbar isLogin={isLogin} toggleAddForm={toggleAddForm} />
      <hr className="my-2 opacity-10" />
      <CategoryNavbar hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <SearchBar isLogin={isLogin} search={search} hidden={hidden} />
      <hr className="my-2 opacity-0" hidden={!isLogin} />
      <StatusNavbar hidden={hidden} />
      <hr className="mt-2 opacity-10" hidden={hidden} />

      <AddShow isAddFormClose={isAddFormClose} AddFormClose={AddFormClose} />
    </div>
  );
};

export default FullNavbar;
