import { category } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const CategoryNavbar = ({ hidden, className }) => {
  return (
    <div hidden={hidden} className="w-full">
      <div className="flex items-center justify-center flex-wrap h-fit w-full">
        <div className="flex gap-2 items-center justify-center flex-wrap max-w-2xl mx-auto">
          {category.map((item, index) => (
            <Link key={index} href={`/category/${item}`}>
              <div
                className={`${
                  className ||
                  "text-sm font-medium px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-slate-300 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out"
                }`}
              >
                {item}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
