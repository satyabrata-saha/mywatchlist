"use client";
import { Card, Footer, FullNavbar } from "@/components/ui";
import toastMessage from "@/lib/toastMessage";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const StatusSingle = () => {
  const { id } = useParams();
  const urlData = id.split("%20").join(" ");

  const [watchlistData, setWatchlistData] = useState([]);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const getCookieSetLoginState = async () => {
    const res = await fetch("/api/auth/authloging", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (data.login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  const searchShow = async (title) => {
    if (!title) {
      getData();
    }
    if (title.length > 0) {
      const res = await fetch("/api/watchlist/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });
      const data = await res.json();
      setWatchlistData(data.data);
    }
  };
  const getData = async () => {
    const res = await fetch("/api/watchlist/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: urlData }),
    });
    const data = await res.json();

    setWatchlistData(data.data || []);
    setMessage(data.message);
  };
  useEffect(() => {
    getData();
    getCookieSetLoginState();
  }, []);

  useEffect(() => {
    if (message.length > 0) toastMessage(message);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={searchShow} hidden={true} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-50 mb-4">{urlData}</h1>
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
                  alternativeTitle={item.alternative_title}
                  link={item.link}
                  isLogin={isLogin}
                />
              </div>
            ))
          ) : (
            <div className="w-full h-[60vh] flex items-center justify-center overflow-hidden col-span-full">
              <p className="animate-pulse text-center text-pretty font-semibold text-slate-50/50">
                there is no show in this status or might be something happened.
                if not shown try refreshing the page
              </p>
            </div>
          )}
        </div>

        <div className="my-6 flex flex-col gap-4 items-center justify-center ">
          <Link
            href="/watchlist"
            className="bg-orange-500 hover:bg-orange-600 text-slate-50 font-medium py-2 px-4 rounded-full transition-all duration-150 ease-in-out"
          >
            Load All
          </Link>
        </div>
        <div className="w-full pt-4 px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StatusSingle;
