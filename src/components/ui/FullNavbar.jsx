"use client";
import React, { useEffect, useState } from "react";
import {
  AddShow,
  CategoryNavbar,
  Logout,
  Navbar,
  SearchBar,
  StatusNavbar,
} from "@/components/ui";
import { useRouter } from "next/navigation";

const FullNavbar = ({ search, hidden = false, login }) => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isAddFormClose, setIsAddFormClose] = useState(true);
  const toggleAddForm = () => {
    setIsAddFormClose((prev) => !prev);
  };

  const AddFormClose = (boolValue) => {
    setIsAddFormClose(boolValue);
  };

  useEffect(() => {
    setIsAddFormClose(true);
    setIsLogin(login || false);
  }, []);

  return (
    <div className="w-full h-fit items-start justify-start">
      <Navbar isLogin={isLogin} toggleAddForm={toggleAddForm} />
      <hr className="my-2 opacity-10" />
      <CategoryNavbar
        hidden={hidden}
        isLogin={isLogin}
        toggleAddForm={toggleAddForm}
      />
      <hr className="my-2 opacity-0" />
      <SearchBar isLogin={true} search={search} hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <StatusNavbar hidden={hidden} />
      <hr className="mt-2 opacity-10" hidden={hidden} />
      {/* <Logout hidden={!isLogin} /> */}

      <AddShow isAddFormClose={isAddFormClose} AddFormClose={AddFormClose} />
    </div>
  );
};

export default FullNavbar;
