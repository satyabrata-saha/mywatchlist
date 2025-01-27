import { category, statusArray } from "@/lib/constant";
import toastMessage from "@/lib/toastMessage";
import { useEffect, useState } from "react";

const AddShow = ({ isAddFormClose, AddFormClose }) => {
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    alternativeTitle: "",
    category: "Anime",
    genres: "",
    startDate: "",
    endDate: "",
    status: "Watching",
    link: "",
    rating: 0,
  });

  // console.log(data);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!data.title && !data.category && !data.genres && !data.status) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        toastMessage("Show added successfully");

        AddFormClose(true);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        // toastMessage("Something went wrong");
        toastMessage(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOutSideClick = () => {
    AddFormClose(true);
  };

  return (
    <div
      hidden={isAddFormClose}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/50 w-screen h-screen backdrop-blur-sm z-20 tracking-wider overflow-x-hidden p-4 sm:p-8 text-sm sm:text-base"
    >
      <div className="flex justify-center items-center h-fit w-full my-4">
        <div
          onClick={handleOutSideClick}
          hidden={isAddFormClose}
          className="absolute top-0 left-0 w-screen h-screen  opacity-50 z-0 cursor-pointer"
        />
        <form
          className="z-10 flex flex-col items-center justify-center gap-4 w-full h-fit sm:w-3/4 lg:w-1/2 bg-slate-800 p-4 sm:p-8 rounded-md shadow-lg required:outline-red-500"
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
            required
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

          <div className="flex justify-between items-center text-center w-full gap-3">
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
          </div>

          <input
            type="text"
            placeholder="Genres"
            className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
            onChange={(e) => setData({ ...data, genres: e.target.value })}
            value={data.genres}
            required
          />
          <div className="block sm:flex justify-between items-center text-center w-full gap-3">
            <input
              type="date"
              placeholder="Start Date"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm"
              onChange={(e) => setData({ ...data, startDate: e.target.value })}
              value={data.startDate}
              required={false}
            />
            <span className="text-slate-500">To</span>
            <input
              type="date"
              placeholder="End Date"
              className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm"
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
              value={data.endDate}
              required={false}
            />
          </div>

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
            className="w-full rounded-md text-black py-4 focus:outline-none"
            onChange={(e) => setData({ ...data, rating: e.target.value })}
            value={data.rating}
            required={false}
          />
          <p className="w-full">Rating: {data.rating}</p>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Show
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShow;
