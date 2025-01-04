import { category, status } from "@/lib/constant";
import { useEffect, useState } from "react";

const AddShow = ({ isAddFormClose, AddFormClose, toastMessage }) => {
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
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !data.title &&
      !data.thumbnail &&
      !data.category &&
      !data.genres &&
      !data.status
    ) {
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
      console.log(result);

      if (result.login === false) {
        toastMessage("Please login to add show");
        // setError("Please login to add show");
        // alert("Please login to add show");
        return;
      }

      if (result.login === true) {
        // router.refresh();
        // alert("Show added successfully");
        toastMessage("Show added successfully");
        setError("Show added successfully");

        AddFormClose(true);
        // window.location.reload();
      } else {
        // setError("Error");
        toastMessage("Something went wrong");

        alert("Something went wrong");
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
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/50 w-screen h-screen backdrop-blur-sm z-10 tracking-wider overflow-hidden p-8"
    >
      <div className="flex justify-center items-center h-full w-full ">
        <div
          onClick={handleOutSideClick}
          hidden={isAddFormClose}
          className="absolute top-0 left-0 w-screen h-screen bg-orange-500 opacity-50 z-0 cursor-pointer"
        />
        <form
          className="z-10 flex flex-col items-center justify-center gap-4 w-4/5 sm:w-1/2 bg-slate-800 p-8 rounded-md shadow-lg required:outline-red-500"
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

          <select
            className="w-full rounded-md text-black px-3 py-4 focus:outline-none placeholder:text-slate-500/50 placeholder:text-sm required:outline-red-500"
            onChange={(e) => setData({ ...data, category: e.target.value })}
            required
          >
            {category.map((item, index) => (
              <option key={index} value={item}>
                {item}
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
            {status.map((item, index) => (
              <option key={index} value={item}>
                {item}
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
