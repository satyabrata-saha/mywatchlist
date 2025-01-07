"use client";
import { FullNavbar } from "@/components/ui";
import { category, statusArray } from "@/lib/constant";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast, CloseButton } from "react-toastify";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    category: "Anime",
    genres: "",
    startDate: "",
    endDate: "",
    status: "Watching",
    rating: 0,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const toastMessage = (message) =>
    toast(message, {
      theme: "dark",
      autoClose: 2000,
      position: "bottom-right",
    });

  const handleClick = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    if (!data.title && !data.category && !data.genres && !data.status) {
      toastMessage("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          data,
        }),
      });
      const result = await res.json();
      // console.log(result);

      if (result.login === false) {
        toastMessage("Please login to add show");
        return;
      }

      if (result.login === true) {
        toastMessage("Show Updated successfully");
      } else {
        toastMessage("Something went wrong");
      }
    } catch (error) {
      toastMessage("Something went wrong");
      console.error(error);
    }

    setButtonDisabled(false);
  };

  const getData = async () => {
    const res = await fetch("/api/watchlist/single", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();

    const watchlistData = data.data[0];

    setData({
      title: watchlistData.title,
      thumbnail: watchlistData.thumbnail,
      category: watchlistData.category,
      genres: watchlistData.genres,
      startDate: watchlistData.startDate || "",
      endDate: watchlistData.endDate || "",
      status: watchlistData.status,
      rating: watchlistData.rating,
    });

    setButtonDisabled(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div className="flex items-center justify-center flex-wrap h-fit w-full">
          <form
            className="z-10 flex flex-col items-center justify-center gap-4 w-full sm:w-4/5 md:1/2 bg-slate-800 p-8 rounded-md shadow-lg required:outline-red-500"
            onSubmit={handleClick}
          >
            <input
              type="text"
              placeholder="Show Title"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, title: e.target.value })}
              value={data.title}
              required
            />
            <input
              type="url"
              placeholder="Thumbnail URL"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, thumbnail: e.target.value })}
              value={data.thumbnail}
            />

            <select
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, category: e.target.value })}
              required
            >
              {category.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Genres"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, genres: e.target.value })}
              value={data.genres}
              required
            />
            <input
              type="date"
              placeholder="Start Date"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm "
              onChange={(e) => setData({ ...data, startDate: e.target.value })}
              value={data.startDate}
              required={false}
            />
            <input
              type="date"
              placeholder="End Date"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm"
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
              value={data.endDate}
              required={false}
            />

            <select
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, status: e.target.value })}
              required
            >
              {statusArray.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              placeholder="Rating"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none"
              onChange={(e) => setData({ ...data, rating: e.target.value })}
              value={data.rating}
              required={false}
            />
            <p className="w-full">Rating: {data.rating}</p>

            <button
              type="submit"
              disabled={buttonDisabled}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-700/50"
            >
              Add Show
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SinglePage;
