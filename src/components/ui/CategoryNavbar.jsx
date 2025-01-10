import { category } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const CategoryNavbar = ({ hidden, className, gridClass }) => {
  return (
    <div hidden={hidden} className="w-full tracking-wider">
      <div className="flex items-center justify-center flex-wrap h-fit w-full">
        <div
          className={`${
            gridClass ||
            "flex gap-2 items-center justify-center flex-wrap max-w-2xl mx-auto"
          } `}
        >
          {category.map((item) => (
            <Link key={item.id} href={`/category/${item.name.toLowerCase()}`}>
              <div
                className={`${
                  className ||
                  "text-sm px-3.5 py-1.5 dark:text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800"
                } font-bold  rounded-full hover:scale-[105%] transition-all duration-200 ease-in-out w-full h-full`}
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "soft-light",
                }}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
