"use client";
import React, { useState } from "react";
import {
  CategoryNavbar,
  Navbar,
  SearchBar,
  StatusNavbar,
} from "@/components/ui";

const FullNavbar = ({
  search,
  hidden = false,
  categorySearch,
  statusSearch,
  handleFilterThatIs,
}) => {
  const [ratingFilter, setRatingFilter] = useState(0);

  return (
    <div className="w-full h-fit items-start justify-start">
      <Navbar />
      <hr className="my-2 opacity-10" />
      <CategoryNavbar hidden={hidden} categorySearch={categorySearch} />
      <hr className="my-2 opacity-0" />
      <SearchBar search={search} hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <StatusNavbar hidden={hidden} statusSearch={statusSearch} />

      <details className="group mt-2">
        <summary className="list-none cursor-pointer flex items-center select-none">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white flex-shrink-0 mr-2 transition-transform duration-200 group-open:rotate-90"></div>
          <div className="h-[1px] w-full bg-white opacity-10"></div>
        </summary>

        <div className="flex gap-2 my-2 items-center justify-center flex-wrap max-w-2xl mx-auto">
          <div
            onClick={() => handleFilterThatIs("Fhinish in one Day")}
            className="cursor-pointer"
          >
            <div className="text-sm px-3.5 py-1.5 dark:text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 select-none sm:text-sm font-bold rounded-full hover:scale-[105%] transition-all duration-200 ease-in-out w-full h-full">
              Fhinish in one Day
            </div>
          </div>
          <div>
            <div className="text-sm px-3.5 py-1.5 dark:text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 select-none sm:text-sm font-bold rounded-full hover:scale-[105%] transition-all duration-200 ease-in-out w-full h-full">
              <div className="flex flex-row gap-2 justify-center text-center items-center">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  onChange={(e) => {
                    setRatingFilter(e.target.value);
                    handleFilterThatIs(e.target.value);
                  }}
                  value={ratingFilter}
                  className="cursor-pointer"
                />
                <span className="">{`< ${ratingFilter}`}</span>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default FullNavbar;
