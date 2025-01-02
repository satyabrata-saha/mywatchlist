import { category } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const CategoryNavbar = () => {
  return (
    <div className="flex gap-4 w-full h-fit items-center justify-center flex-wrap">
      {category.map((item, index) => (
        <Link key={index} href={`/category/${item}`}>
          <div className="text-sm font-medium px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-slate-300 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out">
            {item}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavbar;
