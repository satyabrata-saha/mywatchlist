"use client";
import { Card, Footer, FullNavbar } from "@/components/ui";
import toastMessage from "@/lib/toastMessage";
import { useEffect, useState } from "react";

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [message, setMessage] = useState("");
  const [total_show, setTotal_show] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const getCookieSetLoginState = async () => {
    const res = await fetch("/api/auth/authloging", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setIsLogin(data.login);
  };
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
      // console.log(data);
      setWatchlistData(data.data);
      setMessage(data.message);
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
    setMessage(data.message);
    setTotal_show(data.total_show);
  };

  useEffect(() => {
    getData();
    getCookieSetLoginState();
  }, []);

  useEffect(() => {
    if (message.length > 0) toastMessage(message);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-start min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full min-h-screen flex flex-col justify-between sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={searchShow} login={isLogin} />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-between">
          <p className="text-slate-50/50 font-semibold tracking-wider text-center pt-2">
            Total Shows: {total_show}
          </p>
          <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="grid grid-rows-* grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-2 sm:gap-4 mt-4 h-fit">
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
                <div className="w-full h-4/5 flex items-center justify-center overflow-hidden col-span-full">
                  <p className="animate-pulse text-center text-pretty font-semibold text-slate-50/50">
                    loding data, if not shown try refreshing the page
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full pt-4 px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
