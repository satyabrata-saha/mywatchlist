"use client";
import { FullNavbar } from "@/components/ui";
import { category } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div className=" w-[90%] sm:max-w-3xl mx-auto h-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-* gap-4 text-center tracking-wider">
            {category.map((item) => (
              <Link key={item.id} href={`/category/${item.name.toLowerCase()}`}>
                <div className="text-xl font-bold dark:text-slate-200 rounded-md mb-2 hover:scale-[102%] transition-all duration-200 ease-in-out w-full max-w-[200px] h-[300px]">
                  <Image
                    src={item.bgImage}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="rounded-md object-center w-full h-[90%]"
                  />
                  <div className="mt-2">{item.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
