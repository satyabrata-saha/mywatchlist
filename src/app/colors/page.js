import React from "react";

const Colors = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <div className="dark:bg-blue-500 dark:hover:bg-blue-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-purple-500 dark:hover:bg-purple-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-green-500 dark:hover:bg-green-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-yellow-500 dark:hover:bg-yellow-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-red-500 dark:hover:bg-red-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-slate-700 dark:hover:bg-slate-800 h-20 w-20 rounded-sm"></div>
          <div className="h-20 w-20 rounded-sm"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="text-blue-500/50 h-20 w-20 rounded-sm">
            text-blue-500/50
          </div>
          <div className="text-purple-500/50 h-20 w-20 rounded-sm">
            text-purple-500/50
          </div>
          <div className="text-green-500/50 h-20 w-20 rounded-sm">
            text-green-500/50
          </div>
          <div className="text-yellow-500/50 h-20 w-20 rounded-sm">
            text-yellow-500/50
          </div>
          <div className="text-red-500/50 h-20 w-20 rounded-sm">
            text-red-500
          </div>
          <div className="text-slate-500/50 h-20 w-20 rounded-sm">
            text-slate-500/50
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
            Anime
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600">
            Movie
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            TV Show
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
            OVA
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            ONA
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
            Manga
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
            Manhwa
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500">
            Light Novel
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
            Novel
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500">
            Web Series
          </div>
          <div className="h-20 w-20 rounded-sm text-white text text-center bg-gradient-to-r from-rose-500 via-pink-500 to-red-500">
            default
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
