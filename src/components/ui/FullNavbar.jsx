"use client";
import React, { useEffect, useState } from "react";
import {
  CategoryNavbar,
  Navbar,
  SearchBar,
  StatusNavbar,
} from "@/components/ui";
import { useRouter } from "next/navigation";

const FullNavbar = ({ search, hidden = false }) => {
  return (
    <div className="w-full h-fit items-start justify-start">
      <Navbar />
      <hr className="my-2 opacity-10" />
      <CategoryNavbar hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <SearchBar search={search} hidden={hidden} />
      <hr className="my-2 opacity-0" />
      <StatusNavbar hidden={hidden} />
      <hr className="mt-2 opacity-10" hidden={hidden} />
    </div>
  );
};

export default FullNavbar;
