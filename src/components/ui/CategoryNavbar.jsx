import { category } from "@/lib/constant";
import React from "react";

const CategoryNavbar = ({
  hidden,
  className,
  gridClass,
  toggleAddForm,
  isLogin,
  categorySearch,
}) => {
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
            <div
              key={item.id}
              onClick={() => categorySearch(item.name)}
              className="cursor-pointer"
            >
              <div
                className={`${
                  className ||
                  "text-sm px-3.5 py-1.5 dark:text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800"
                } text-xs sm:text-sm font-bold rounded-full hover:scale-[105%] transition-all duration-200 ease-in-out w-full h-full`}
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "soft-light",
                }}
              >
                {item.name}
              </div>
            </div>
          ))}
          <button
            onClick={toggleAddForm}
            hidden={isLogin}
            className="text-xs sm:text-sm sm:hidden bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
