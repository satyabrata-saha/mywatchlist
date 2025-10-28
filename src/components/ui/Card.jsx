import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategoryRibbonStyle, statusArray } from "@/lib/constant";

const getStatusColor = (status) => {
  switch (status) {
    case "Watching":
      return "text-blue-500/75";
    case "Reading":
      return "text-purple-500/75";
    case "Completed":
      return "text-green-500/75";
    case "On Hold":
      return "text-yellow-500/75";
    case "Dropped":
      return "text-red-500/75";
    case "Plan to Watch":
      return "text-slate-400/75";
    default:
      return "text-slate-100/50";
  }
};

const DetailsModal = ({ details, onClose }) => {
  const {
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
  } = details;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity overflow-y-auto sm:flex sm:items-center sm:justify-center"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col sm:flex-row gap-6 bg-slate-800/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl max-w-2xl w-full mx-auto my-12 sm:my-0 sm:mx-4 border border-slate-100/10 sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/*LEFT Side Wrapper*/}
        <div className="flex-shrink-0 w-full sm:w-1/3">
          <img
            src={thumbnail || "/placeholder.png"}
            alt={title}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/*RIGHT SIDE WRAPPER*/}
        <div className="flex flex-col gap-3 w-full sm:w-2/3 text-sm sm:min-h-0">
          <div className="flex flex-col gap-3 sm:flex-1 sm:overflow-y-auto sm:pr-2">
            <Link href={link || "#"} target="_blank">
              <h3 className="text-xl text-blue-200 font-bold hover:text-blue-300 transition-colors">
                {title}
              </h3>
            </Link>

            {alternative_title ? (
              <p className="text-slate-300">
                <span className="font-semibold text-slate-100">
                  Alternative Title:{" "}
                </span>
                <Link href={link || "#"} target="_blank">
                  <span className="cursor-pointer hover:underline">
                    {alternative_title ? `${alternative_title}` : ""}
                  </span>
                </Link>
              </p>
            ) : null}

            <p className="text-slate-300">
              <span className="font-semibold text-slate-100">Type: </span>
              <span
                onClick={() => {
                  categorySearch(category);
                  onClose();
                }}
                className="cursor-pointer hover:underline"
              >
                {category || "?"}
              </span>
            </p>

            <div>
              <span className="font-semibold text-slate-100">Genres: </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {genres
                  ? genres.split(", ").map((genre, index) => (
                      <span
                        key={index}
                        onClick={() => {
                          genresSearch(genre);
                          onClose();
                        }}
                        className="bg-slate-700 px-2 py-1 rounded-md text-xs text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                      >
                        {genre}
                      </span>
                    ))
                  : "?"}
              </div>
            </div>

            <p className="text-slate-300">
              <span className="font-semibold text-slate-100">Date: </span>
              <span>{start_date || "?"}</span>
              <span className="text-slate-500"> ~ </span>
              <span>{end_date || "?"}</span>
            </p>

            <p className="text-slate-300">
              <span className="font-semibold text-slate-100">Status: </span>
              <span
                onClick={() => {
                  statusSearch(status);
                  onClose();
                }}
                className={`${getStatusColor(
                  status
                )} tracking-wider font-semibold cursor-pointer hover:underline`}
              >
                {status}
              </span>
            </p>

            <p className="text-yellow-400">
              <span className="font-semibold text-slate-100">Rating: </span>
              <span>{rating || "?"}</span>
              <span className="text-slate-400"> / 10</span>
            </p>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex-shrink-0 flex items-center justify-center gap-2 w-full text-center bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500"
            >
              <FiExternalLink size={18} />
              <span>{category || "?"} Detail Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, thumbnail, status } = props;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`flex flex-col p-1 rounded-lg cursor-pointer group 
          ${statusArray.find((item) => item.name === status).bgcolor} hover:${
          statusArray.find((item) => item.name === status).bgcolorHover
        }
          transition-colors`}
        onClick={openModal}
      >
        <div className="relative w-full overflow-hidden rounded-lg aspect-[2/3] shadow-lg group">
          <CategoryRibbon category={props.category} />
          <img
            src={thumbnail || "/placeholder.png"}
            alt={title}
            width={200}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg">
            <h5 className="absolute bottom-2 left-3 right-3 text-sm sm:text-base text-white font-semibold text-shadow-lg group-hover:text-blue-300 transition-colors">
              {title}
            </h5>
          </div>

          {/* <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
            <div className="absolute transform rotate-45 bg-blue-500 text-white text-center font-semibold text-xs py-1 -right-7 top-4 w-28 shadow-md">
              {props.category}
            </div>
          </div> */}
        </div>
      </div>
      {isModalOpen && <DetailsModal details={props} onClose={closeModal} />}
    </>
  );
};

const CategoryRibbon = ({ category }) => {
  if (!category) {
    return null;
  }

  return (
    <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden z-10">
      <div
        className={`
          absolute transform rotate-45 text-white text-center font-bold text-xs uppercase tracking-wider
          py-1 -right-8 top-7 w-36 shadow-lg
          bg-gradient-to-r ${getCategoryRibbonStyle(category)}
          transition-all duration-300 ease-in-out
          opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
        `}
      >
        {category}
      </div>
    </div>
  );
};

export default Card;
