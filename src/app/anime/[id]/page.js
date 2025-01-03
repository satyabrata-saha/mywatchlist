"use client";
import { FullNavbar } from "@/components/ui";
import { useParams } from "next/navigation";
import React from "react";

const SinglePage = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full py-2">
        <FullNavbar
          isLogin={isLogin}
          isAddFormClose={isAddFormClose}
          toggleAddForm={toggleAddForm}
          AddFormClose={AddFormClose}
        />
      </div>
    </div>
  );
};

export default SinglePage;
