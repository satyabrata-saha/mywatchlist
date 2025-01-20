import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

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
  alternativeTitle,
  link,
  isLogin = false,
}) => {
  const [colorStatus, setColorStatus] = useState("text-slate-100/50");

  useEffect(() => {
    if (status === "Watching") {
      setColorStatus("text-blue-500/50");
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
        <Link href={link} className="w-full h-[318px]" target="_blank">
          <div className="h-full flex items-center justify-center">
            <Image
              src={thumbnail || "/placeholder.png"}
              alt={title}
              placeholder="blur"
              blurDataURL={thumbnail || "/placeholder.png"}
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-full hover:scale-[101%] transition-all duration-300 ease-in-out"
            />
          </div>
        </Link>
        <div className="flex flex-col items-baseline justify-center gap-2 w-full h-full">
          <Link href={link} className="w-full h-full">
            <h5 className="text-sm sm:text-base text-blue-200/75 font-semibold mt-4 pb-2 text-balance hover:text-blue-300 transition-all duration-200 ease-in-out">
              {title}
            </h5>
          </Link>

          {alternativeTitle && (
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">Alternative Title: </span>
              <span>{alternativeTitle}</span>
            </p>
          )}

          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Type: </span>
            <span>{category}</span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Genres: </span>

            <span className="flex flex-wrap gap-1 mt-1">
              {genres.split(", ").map((genre, index) => (
                <Link
                  key={index}
                  href={`/genres/${genre.toLowerCase()}`}
                  className="bg-slate-100/10 px-2 py-1 rounded-lg hover:bg-slate-100/5 transition-all duration-200 ease-in-out"
                >
                  <span>{genre} </span>
                </Link>
              ))}
            </span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Start Date: </span>
            <span>{start_date?.split("T")[0]}</span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">End Date: </span>
            <span>{end_date?.split("T")[0]}</span>
          </p>
          <p className="text-xs text-slate-100/50">
            <span className="text-slate-100/75">Status: </span>
            <Link href={`/status/${status.toLowerCase()}`}>
              <span className={`${colorStatus} font-semibold`}>{status}</span>
            </Link>
          </p>
          <p className="text-xs text-yellow-500/50">
            <span className="text-slate-100/75">Rating: </span>
            <span>{rating}</span>
            <span className="text-slate-100/75"> /10</span>
          </p>
          {isLogin && (
            <p className="text-xs text-slate-100/50">
              <Link
                href={`/anime/${id}`}
                className="text-blue-400 hover:text-blue-500 transition-all duration-200 ease-in-out"
                target="_blank"
              >
                <span className="flex gap-1">
                  edit <FaLink size={10} className="mt-[0.21rem]" />
                </span>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
