import { category } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const CategoryNavbar = () => {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap h-fit w-full px-4">
      <div className="flex gap-4 items-center justify-center flex-wrap w-full sm:w-[85%] lg:w-[95%] xl:w-[85%]">
        {category.map((item, index) => (
          <Link key={index} href={`/category/${item}`}>
            <div className="text-sm font-medium px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-slate-300 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out">
              {item}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
