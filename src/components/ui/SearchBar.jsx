import React, { useEffect, useState } from "react";

const SearchBar = ({ isLogin, search, hidden }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    await search(searchValue);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <div className="h-fit w-full" hidden={!isLogin || hidden}>
      <div className="max-w-2xl mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => handleSearchInput(e)}
            value={searchValue}
            className="block w-full p-4 ps-10 text-sm bg-slate-900 border border-slate-800 rounded-full text-slate-50 focus:outline-none "
            placeholder="Search for Shows..."
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="text-sm text-white absolute end-2.5 bottom-2.5 dark:bg-orange-500 dark:hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full  px-4 py-2 transition-all duration-200 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
