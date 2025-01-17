import React from "react";

const Colors = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <div className="dark:bg-blue-500 h-20 w-20 rounded-sm"></div>
          <div className="dark:hover:bg-blue-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-green-500 h-20 w-20 rounded-sm"></div>
          <div className="dark:hover:bg-green-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-yellow-500 h-20 w-20 rounded-sm"></div>
          <div className="dark:hover:bg-yellow-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-red-500 h-20 w-20 rounded-sm"></div>
          <div className="dark:hover:bg-red-600 h-20 w-20 rounded-sm"></div>
          <div className="dark:bg-slate-700 h-20 w-20 rounded-sm"></div>
          <div className="dark:hover:bg-slate-800 h-20 w-20 rounded-sm"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="text-blue-500/50 h-20 w-20 rounded-sm">
            text-blue-500/50
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
      </div>
    </div>
  );
};

export default Colors;
