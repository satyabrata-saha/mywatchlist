"use client";
import { CategoryNavbar, FullNavbar } from "@/components/ui";

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div className="w-full h-full">
          <CategoryNavbar
            hidden={false}
            className="text-xl font-bold dark:text-slate-200 px-8 py-4 m-2 rounded-lg"
            gridClass="grid grid-cols-2 grid-rows-* gap-2 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
