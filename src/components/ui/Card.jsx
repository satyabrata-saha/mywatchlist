import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({
  id,
  title,
  category,
  genres,
  start_date,
  end_date,
  thumbnail,
  status,
  rating,
  alternative_title,
  link,
  genresSearch,
  categorySearch,
  statusSearch,
}) => {
  const [colorStatus, setColorStatus] = useState("text-slate-100/50");

  useEffect(() => {
    if (status === "Watching") {
      setColorStatus("text-blue-500/50");
    } else if (status === "Reading") {
      setColorStatus("text-purple-500/50");
    } else if (status === "Completed") {
      setColorStatus("text-green-500/50");
    } else if (status === "On Hold") {
      setColorStatus("text-yellow-500/50");
    } else if (status === "Dropped") {
      setColorStatus("text-red-500/50");
    } else if (status === "Plan to Watch") {
      setColorStatus("text-slate-500/50");
    }
  }, []);

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden sm:w-full min-h-full border border-slate-100/5 p-1 sm:p-2 rounded-lg shadow-xl hover:scale-[100.5%] transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex flex-col justify-between">
        <Link href={link || "#"} className="w-full h-fit" target="_blank">
          <div className="h-full flex items-center justify-center">
            <img
              src={thumbnail || "/placeholder.png"}
              alt={title}
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-fit hover:scale-[101%] transition-all duration-300 ease-in-out"
            />
          </div>
        </Link>
        <div className="flex flex-col items-baseline justify-center gap-2 w-full h-full">
          <Link href={link || "#"} className="w-full h-full">
            <h5 className="text-sm sm:text-base text-blue-200/75 font-semibold mt-4 pb-2 text-wrap hover:text-blue-300 transition-all duration-200 ease-in-out">
              <span className="block">{title}</span>
              <span className="text-slate-100/50 text-xs sm:text-sm">
                {alternative_title ? ` ( ${alternative_title} )` : ""}
              </span>
            </h5>
          </Link>

          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Type: </span>
            <span
              onClick={() => categorySearch(category)}
              className="cursor-pointer"
            >
              <span>{category || "?"}</span>
            </span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Genres: </span>

            <span className="flex flex-wrap gap-1 mt-1 tracking-wide">
              {genres
                ? genres?.split(", ").map((genre, index) => (
                    <span
                      key={index}
                      onClick={() => genresSearch(genre)}
                      className="bg-slate-100/10 px-2 py-1 rounded-lg hover:bg-slate-100/5 transition-all duration-200 ease-in-out cursor-pointer"
                    >
                      <span>{genre} </span>
                    </span>
                  ))
                : "?"}
            </span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Date: </span>
            <br />
            <span>{start_date || "?"}</span>
            <span className="text-slate-100/25"> ~ </span>
            <span>{end_date || "?"}</span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Status: </span>
            <span
              onClick={() => statusSearch(status)}
              className="cursor-pointer"
            >
              <span className={`${colorStatus} tracking-wider font-semibold`}>
                {status}
              </span>
            </span>
          </p>
          <p className="text-xs text-yellow-500/50">
            <span className="text-slate-100/75">Rating: </span>
            <span>{rating || "?"}</span>
            <span className="text-slate-100/75"> /10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
