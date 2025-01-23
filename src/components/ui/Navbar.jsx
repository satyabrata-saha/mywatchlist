import { links } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Navbar = ({ isLogin, toggleAddForm }) => {
  return (
    <nav className="flex flex-wrap justify-center items-center w-full h-fit overflow-hidden p-0">
      <div className="flex gap-4 items-center w-full justify-between text-center">
        <div>
          <Link href="/">
            <h1 className="text-lg sm:text-xl font-medium sm:font-semibold start-0 dark:text-orange-500 dark:hover:text-orange-600 transition-all duration-200 ease-in-out">
              MyWatchlist
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className="text-sm sm:text-base text-slate-100/50 hover:text-slate-100 transition-all duration-200 ease-in-out"
            >
              {l.name}
            </Link>
          ))}
          <span className="hidden sm:inline">
            <button
              onClick={toggleAddForm}
              hidden={isLogin}
              className="bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium py-1 px-3.5 rounded-full transition-all duration-150 ease-in-out"
            >
              Add
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
