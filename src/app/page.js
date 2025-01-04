"use client";
import { Card } from "@/components/ui";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/watchlist/last10", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setWatchlistData(data.data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="grid grid-rows-* grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-2 sm:gap-4 mt-4">
          {watchlistData.length > 0 ? (
            watchlistData.map((item) => (
              <div key={item.id}>
                <Card
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  category={item.category}
                  genres={item.genres}
                  start_date={item.start_date}
                  end_date={item.end_date}
                  status={item.status}
                  rating={item.rating}
                />
              </div>
            ))
          ) : (
            <div className="w-full h-4/5 flex items-center justify-center overflow-hidden col-span-full">
              <p className="animate-pulse text-center text-pretty font-semibold text-slate-50/50">
                loding data, if not shown try refreshing the page
              </p>
            </div>
          )}
        </div>
        <div className="my-6 flex flex-col gap-4 items-center justify-center ">
          <Link
            href="/watchlist"
            className="bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium py-2 px-4 rounded-full transition-all duration-150 ease-in-out"
          >
            Load More
          </Link>
        </div>
      </div>
    </div>
  );
}
