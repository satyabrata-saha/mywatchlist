import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  link,
}) => {
  return (
    <div className="flex flex-col justify-start items-center overflow-hidden sm:w-full min-h-full border border-slate-100/5 p-2 rounded-lg shadow-xl hover:scale-[100.5%] transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex flex-col justify-between">
        <Link href={`/anime/${id}`} className="w-full h-full">
          <div className="w-full h-[300px] sm:h-[275px] flex items-center justify-center">
            <Image
              src={thumbnail || "/placeholder.png"}
              alt={title}
              placeholder="blur"
              blurDataURL={thumbnail || "/placeholder.png"}
              width={150}
              height={150}
              className="rounded-lg object-center w-full h-full hover:scale-[101%] transition-all duration-300 ease-in-out"
            />
          </div>
        </Link>
        <div className="flex flex-col items-baseline justify-center gap-2 w-full h-full">
          <Link href={`/anime/${id}`} className="w-full h-full">
            <h5 className="text-sm text-blue-200/75 font-semibold mt-4 pb-2 text-balance hover:text-blue-300 transition-all duration-200 ease-in-out">
              {title}
            </h5>
          </Link>

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
            <span>{status}</span>
          </p>
          <p className="text-xs text-yellow-500/50">
            <span className="text-slate-100/75">Rating: </span>
            <span>{rating}</span>
            <span className="text-slate-100/75"> /10</span>
          </p>
          {link && (
            <p className="text-xs text-slate-100/50">
              <Link
                href={link}
                className="text-blue-400 hover:text-blue-500 transition-all duration-200 ease-in-out"
              >
                <span className="flex gap-1">
                  learn more <FaLink size={10} className="mt-[0.21rem]" />
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
