import Image from "next/image";
import Link from "next/link";
import React from "react";

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
}) => {
  return (
    <div className="flex flex-col justify-start items-center overflow-hidden max-w-42 sm:max-w-52 h-full border border-slate-100/5 p-2 rounded-lg shadow-xl hover:scale-[101%] transition-all duration-300 ease-in-out">
      <Link href={`/anime/${id}`}>
        <div className="w-full h-fit ">
          <div className="w-full">
            <Image
              src={thumbnail}
              alt={title}
              priority={true}
              width={150}
              height={150}
              className="rounded-lg object-fill w-full h-full hover:scale-[102%] transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-2 w-full ">
            <h5 className="text-sm text-blue-200/75 font-semibold mt-4 pb-2 text-balance hover:text-blue-300 transition-all duration-200 ease-in-out">
              {title}
            </h5>
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">Type: </span>
              <span>{category}</span>
            </p>
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">Genres: </span>

              <span className="flex flex-wrap gap-1 mt-1">
                {genres.split(", ").map((genre, index) => (
                  <span
                    key={index}
                    className="bg-slate-100/10 px-2 py-1 rounded-lg"
                  >
                    {genre}{" "}
                  </span>
                ))}
              </span>
            </p>
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">Start Date: </span>
              <span>{start_date}</span>
            </p>
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">End Date: </span>
              <span>{end_date}</span>
            </p>
            <p className="text-xs text-slate-100/50">
              <span className="text-slate-100/75">Status: </span>
              <span>{status}</span>
            </p>
            <p className="text-xs text-yellow-200/50">
              <span className="text-slate-100/75">Rating: </span>
              <span>{rating}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
