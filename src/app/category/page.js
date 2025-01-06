"use client";
import { CategoryNavbar, FullNavbar } from "@/components/ui";
import React from "react";

const Category = () => {
  const searchShow = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={searchShow} hidden={true} />
        </div>
        <div className="w-full h-full">
          <CategoryNavbar
            hidden={false}
            className="text-lg bg-slate-700 px-8 py-4 m-2 rounded-full hover:bg-slate-800 transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
