"use client";
import { Card, Footer, FullNavbar } from "@/components/ui";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const GenresSingle = () => {
  const { id } = useParams();
  const urlData = id.split("%20").join(" ").toUpperCase();

  const [watchlistData, setWatchlistData] = useState([]);
  const [total_show, setTotal_show] = useState(0);

  const getData = async () => {
    let data;
    let res;
    try {
      data = await fetch(
        "https://docs.google.com/spreadsheets/d/1UIAhtWf9cUk_W4tSxlrGI5-562yOaXBFTxz74vlgmUY/gviz/tq?tqx=out:json"
      );
      res = await data.text();
    } catch (error) {
      console.log(error);
    }
    //   console.log(res);

    const json = JSON.parse(res.substring(47, res.length - 2));

    const allData = json.table.rows.map((item) => {
      return {
        id: item.c[0]?.v,
        title: item.c[1]?.v,
        status: item.c[2]?.v,
        alternative_title: item.c[3]?.v,
        category: item.c[4]?.v,
        genres: item.c[5]?.v,
        start_date: item.c[6]?.f,
        end_date: item.c[7]?.f,
        thumbnail: item.c[8]?.v,
        rating: item.c[9]?.v,
        link: item.c[10]?.v,
      };
    });

    const filteredData = allData.filter((item) =>
      item.genres.toLowerCase().includes(urlData.toLowerCase())
    );
    setWatchlistData(filteredData);
    setTotal_show(filteredData.length);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full min-h-screen flex flex-col justify-between sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-50 mb-4">{urlData}</h1>
        </div>
        <p className="text-slate-50/50 font-semibold tracking-wider text-center pt-2">
          Total Shows in this Genre: {total_show}
        </p>
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
                  alternative_title={item.alternative_title}
                  link={item.link}
                />
              </div>
            ))
          ) : (
            <div className="w-full h-[60vh] flex items-center justify-center overflow-hidden col-span-full">
              <p className="animate-pulse text-center text-pretty font-semibold text-slate-50/50">
                there is no show in this category or might be something
                happened. if not shown try refreshing the page
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

export default GenresSingle;
