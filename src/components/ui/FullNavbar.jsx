"use client";
import React from "react";
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
}) => {
  return (
    <div className="w-full h-fit items-start justify-start">
      <Navbar />
      <hr className="my-2 opacity-10" />
      <CategoryNavbar hidden={hidden} categorySearch={categorySearch} />
      <hr className="my-2 opacity-0" />
      <SearchBar search={search} hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <StatusNavbar hidden={hidden} statusSearch={statusSearch} />
      <hr className="mt-2 opacity-10" hidden={hidden} />
    </div>
  );
};

export default FullNavbar;
