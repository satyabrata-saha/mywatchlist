import { links } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Navbar = ({ isLogin, toggleAddForm }) => {
  return (
    <nav className="flex justify-center items-start w-full h-fit overflow-hidden p-0">
      <div className="flex gap-4 items-center justify-between w-full">
        <div>
          <Link href="/">
            <h1 className="text-xl font-semibold start-0 dark:text-orange-500 dark:hover:text-orange-600 transition-all duration-200 ease-in-out">
              MyWatchlist
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-50/50">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className="hover:text-slate-50 transition-all duration-200 ease-in-out"
            >
              {l.name}
            </Link>
          ))}
          <Link
            href="/login"
            hidden={isLogin}
            className=" py-1 px-3.5 text-sm text-slate-50 focus:outline-none rounded-full border border-orange-500 hover:bg-orange-500 transition-all duration-150 ease-in-out"
          >
            Login
          </Link>
          <button
            onClick={toggleAddForm}
            hidden={!isLogin}
            className="bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium py-1 px-3.5 rounded-full transition-all duration-150 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
