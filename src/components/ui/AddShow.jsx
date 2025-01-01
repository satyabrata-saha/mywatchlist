import { useRouter } from "next/navigation";
import { useState } from "react";

const AddShow = ({ isAddFormOpen }) => {
  const router = useRouter();
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
      console.log(res);

      if (res.ok) {
        // router.refresh();
        alert("Show added successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      hidden={isAddFormOpen}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/50 w-screen h-screen backdrop-blur-sm z-10 tracking-wider overflow-hidden p-8"
    >
      <div className="flex justify-center items-center h-full w-full">
        <form
          className="flex flex-col items-center justify-center gap-4 w-4/5 sm:w-1/2 bg-slate-800 p-8 rounded-md shadow-lg required:outline-red-500"
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
            <option value="Action">Anime</option>
            <option value="Adventure">Manga</option>
            <option value="Comedy">Movie</option>
            <option value="Drama">TV Show</option>
            <option value="Fantasy">Web Series</option>
            <option value="Horror">Others</option>
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
            <option value="Ongoing">Watching</option>
            <option value="Completed">Completed</option>
            <option value="Upcoming">Unfinished</option>
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
          <p>Rating: {data.rating}</p>

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
