import { statusArray } from "@/lib/constant";
import React from "react";

const StatusNavbar = ({ hidden, statusSearch }) => {
  return (
    <div hidden={hidden}>
      <div className="flex items-center justify-center flex-wrap h-fit w-full tracking-wider">
        <div className="flex gap-2 items-center justify-center flex-wrap max-w-2xl mx-auto">
          {statusArray.map((item) => (
            <div
              key={item.id}
              onClick={() => statusSearch(item.name)}
              className="cursor-pointer"
            >
              <div
                className={`${item.bgcolor || "dark:bg-slate-700"} ${
                  item.bgcolorHover || "dark:hover:bg-slate-800"
                } text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full dark:text-slate-200 hover:scale-[105%] transition-all duration-200 ease-in-out`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusNavbar;
