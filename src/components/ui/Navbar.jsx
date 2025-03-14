import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center items-center w-full h-fit overflow-hidden p-0">
      <div className="flex items-center w-full justify-center text-center">
        <div>
          <Link href="/">
            <h1 className="text-lg sm:text-xl font-semibold start-0 dark:text-orange-500 dark:hover:text-orange-600 transition-all duration-200 ease-in-out">
              MyWatchlist
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
