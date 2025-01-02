import React from "react";
import { AddShow, CategoryNavbar, Navbar } from "@/components/ui";

const FullNavbar = ({
  isLogin,
  isAddFormClose,
  toggleAddForm,
  AddFormClose,
}) => {
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
