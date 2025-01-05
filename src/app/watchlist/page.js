"use client";
import { Card, FullNavbar } from "@/components/ui";
import { useEffect, useState } from "react";

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const searchShow = async (title) => {
    if (!title) {
      getData();
    }
    if (title.length > 0) {
      const res = await fetch("/api/watchlist/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });
      const data = await res.json();
      console.log(data);
      setWatchlistData(data.data);
    }
  };
  const getData = async () => {
    const res = await fetch("/api/watchlist/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setWatchlistData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="flex flex-col items-center justify-center w-full sm:w-[85%] lg:w-[95%] xl:w-[85%]">
        <div className="w-full py-4 px-0">
          <FullNavbar search={searchShow} />
        </div>
        <div className="grid grid-rows-* grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
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
      </div>
    </div>
  );
};

export default Watchlist;
