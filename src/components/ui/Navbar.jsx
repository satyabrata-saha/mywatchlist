import Link from "next/link";
import React from "react";

const Navbar = ({ isLogin }) => {
  return (
    <nav className="flex flex-col items-center justify-center w-full sm:w-4/5">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-xl font-semibold start-0 dark:text-blue-500">
          My Watchlist
        </h1>
        <div>
          <Link href="/login" hidden={isLogin} className="">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
