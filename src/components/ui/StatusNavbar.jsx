import { statusArray } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const StatusNavbar = ({ hidden }) => {
  return (
    <div hidden={hidden}>
      <div className="flex items-center justify-center flex-wrap h-fit w-full">
        <div className="flex gap-2 items-center justify-center flex-wrap max-w-2xl mx-auto">
          {statusArray.map((item) => (
            <Link key={item.id} href={`/status/${item.name}`}>
              <div
                className={`${
                  item.bgcolor || "dark:bg-slate-700"
                } text-sm font-medium px-3.5 py-1.5 rounded-full dark:text-slate-300 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out`}
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

export default StatusNavbar;
