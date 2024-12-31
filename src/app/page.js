"use client";
import { AddShow, Card, Navbar } from "@/components/ui";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [watchlistData, setWatchlistData] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(true);

  // console.log(watchlistData);
  useEffect(() => {
    setIsAddFormOpen(true);
    const getData = async () => {
      const res = await fetch("/api/watchlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setWatchlistData(data.data);

      if (res.ok) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    getData();
  }, []);

  const toggleAddForm = () => {
    console.log("clicked");
    setIsAddFormOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen p-4 tracking-wide">
      <div className="w-full">
        <Navbar isLogin={isLogin} toggleAddForm={toggleAddForm} />
        <AddShow isAddFormOpen={isAddFormOpen} />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
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
                loding data if not shown try refreshing the page
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
