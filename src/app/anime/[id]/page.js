"use client";
import { FullNavbar } from "@/components/ui";
import { category, statusArray } from "@/lib/constant";
import toastMessage from "@/lib/toastMessage";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const SinglePage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [tempData, setTempData] = useState({
    title: "",
    thumbnail: "",
    category: "Anime",
    genres: "",
    startDate: "",
    endDate: "",
    status: "Watching",
    rating: 0,
    alternativeTitle: "",
    link: "",
  });
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    category: "Anime",
    genres: "",
    startDate: "",
    endDate: "",
    status: "Watching",
    rating: 0,
    alternativeTitle: "",
    link: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    if (!data.title && !data.category && !data.genres && !data.status) {
      setButtonDisabled(false);
      toastMessage("Please fill all the fields");
      return;
    }

    if (
      data.title === tempData.title &&
      data.category === tempData.category &&
      data.genres === tempData.genres &&
      data.status === tempData.status &&
      data.rating === tempData.rating &&
      data.startDate === tempData.startDate &&
      data.endDate === tempData.endDate &&
      data.thumbnail === tempData.thumbnail &&
      data.link === tempData.link &&
      data.alternativeTitle === tempData.alternativeTitle
    ) {
      toastMessage("No changes is made");
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
        setTimeout(() => {
          router.push("/");
        }, 2000);
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
    setMessage(data.message);

    setData({
      title: watchlistData.title,
      thumbnail: watchlistData.thumbnail,
      category: watchlistData.category,
      genres: watchlistData.genres,
      startDate: watchlistData.start_date?.split("T")[0] || "",
      endDate: watchlistData.end_date?.split("T")[0] || "",
      status: watchlistData.status,
      rating: watchlistData.rating,
      alternativeTitle: watchlistData.alternative_title,
      link: watchlistData.link,
    });
    setTempData({
      title: watchlistData.title,
      thumbnail: watchlistData.thumbnail || "",
      category: watchlistData.category,
      genres: watchlistData.genres,
      startDate: watchlistData.start_date || "",
      endDate: watchlistData.end_date || "",
      status: watchlistData.status,
      rating: watchlistData.rating,
      alternativeTitle: watchlistData.alternative_title || "",
      link: watchlistData.link || "",
    });

    setButtonDisabled(false);
  };

  const handleDelete = async () => {
    const res = await fetch("/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    toastMessage(data.message);
    router.push("/");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (message.length > 0) toastMessage(message);
  }, [message]);

  useEffect(() => {
    if (
      data.title == tempData.title &&
      data.thumbnail == tempData.thumbnail &&
      data.category == tempData.category &&
      data.genres == tempData.genres &&
      data.status == tempData.status &&
      data.rating == tempData.rating &&
      data.startDate == tempData.startDate &&
      data.endDate == tempData.endDate
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [data, tempData]);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4 z-0">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap h-fit w-full mb-8">
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
            <input
              type="text"
              placeholder="Show Alternate Title (Optional)"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) =>
                setData({ ...data, alternativeTitle: e.target.value })
              }
              value={data.alternativeTitle}
            />

            <select
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, category: e.target.value })}
              required
              defaultValue={data.category}
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
              defaultValue={data.endDate}
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
              type="url"
              placeholder="Source URL"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
              onChange={(e) => setData({ ...data, link: e.target.value })}
              value={data.link}
            />

            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              placeholder="Rating"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none"
              onChange={(e) => setData({ ...data, rating: e.target.value })}
              value={data.rating || 0}
              required={false}
            />
            <p className="w-full">Rating: {data.rating}</p>

            <button
              type="submit"
              disabled={buttonDisabled}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-700/50 z-10 transition-all duration-200 ease-in-out"
            >
              Updated Show
            </button>
            <div className="w-full flex justify-end mt-[-3.4rem] z-0">
              <abbr title="Delete">
                <MdDeleteForever
                  onClick={handleDelete}
                  className="text-4xl cursor-pointer text-red-500 hover:text-red-600 transition-all duration-200 ease-in-out"
                />
              </abbr>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
