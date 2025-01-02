"use client";
import { Card, FullNavbar } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [watchlistData, setWatchlistData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isAddFormClose, setIsAddFormClose] = useState(true);

  const toggleAddForm = () => {
    setIsAddFormClose((prev) => !prev);
  };

  const AddFormClose = (boolValue) => {
    setIsAddFormClose(boolValue);
  };

  // console.log(watchlistData);
  useEffect(() => {
    setIsAddFormClose(true);

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

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full py-2">
          <FullNavbar
            isLogin={isLogin}
            isAddFormClose={isAddFormClose}
            toggleAddForm={toggleAddForm}
            AddFormClose={AddFormClose}
          />
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
                loding data if not shown try refreshing the page
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
