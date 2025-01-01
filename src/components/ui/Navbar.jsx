import Link from "next/link";
import React from "react";

const Navbar = ({ isLogin, toggleAddForm }) => {
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Watchlist",
      href: "/watchlist",
    },
  ];
  return (
    <nav className="flex justify-center items-start min-w-screen h-fit overflow-hidden">
      <div className="flex gap-4 items-center justify-between w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        <div>
          <Link href="/">
            <h1 className="text-xl font-semibold start-0 dark:text-orange-500">
              MyWatchlist
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4">
          {links.map((l) => (
            <Link key={l.id} href={l.href}>
              {l.name}
            </Link>
          ))}
          <Link
            href="/login"
            hidden={isLogin}
            className=" py-1.5 px-3 text-sm font-medium text-white focus:outline-none rounded-lg border border-orange-500 hover:border-orange-600 hover:bg-orange-500 transition-all duration-150 ease-in-out"
          >
            Login
          </Link>
          <button
            onClick={toggleAddForm}
            className="bg-orange-500 hover:bg-orange-600 text-white py-1.5 px-3 rounded-md transition-all duration-150 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
