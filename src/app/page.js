"use client";
import { Card, Footer, FullNavbar } from "@/components/ui";
import toastMessage from "@/lib/toastMessage";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [watchlistData, setWatchlistData] = useState([]);
  const [message, setMessage] = useState("");
  const [total_show, setTotal_show] = useState(0);

  const searchShow = async (title) => {
    if (!title) {
      getData();
    }
    if (title.length > 0) {
      const res = await fetch("/api/watchlist/last25", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });
      const data = await res.json();
      // console.log(data);
      setWatchlistData(data.data);
      setMessage(data.message);
    }
  };
  const getData = async () => {
    const res = await fetch("/api/watchlist/last25", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setWatchlistData(data.data);
    setMessage(data.message);
    setTotal_show(data.total_show);
    console.log(data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (message.length > 0) toastMessage(message);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={searchShow} />
        </div>
        <div className="w-full flex items-center justify-center pt-2">
          <p className="text-slate-50/50 font-semibold tracking-wider">
            Total Shows: {total_show}
          </p>
        </div>
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
                  link={item.link}
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
        <div className="w-full pt-4 px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
