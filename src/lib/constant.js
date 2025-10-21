const category = [
  {
    id: 1,
    name: "Anime",
    bgImage: "https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
  },
  {
    id: 2,
    name: "Manga",
    bgImage: "https://cdn.myanimelist.net/images/manga/2/257957.jpg",
  },
  {
    id: 3,
    name: "Manhwa",
    bgImage: "https://cdn.myanimelist.net/images/manga/2/308134.jpg",
  },
  {
    id: 4,
    name: "Light Novel",
    bgImage: "https://cdn.myanimelist.net/images/manga/3/164868.jpg",
  },
  {
    id: 5,
    name: "Novel",
    bgImage: "https://cdn.myanimelist.net/images/anime/1463/145502.jpg",
  },
  {
    id: 6,
    name: "Movie",
    bgImage: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
  },
  {
    id: 7,
    name: "TV Show",
    bgImage: "https://cdn.myanimelist.net/images/anime/1614/90408.jpg",
  },
  {
    id: 8,
    name: "OVA",
    bgImage: "https://cdn.myanimelist.net/images/anime/1862/121020.jpg",
  },
  {
    id: 9,
    name: "ONA",
    bgImage: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
  },
  {
    id: 10,
    name: "Web Series",
    bgImage:
      "https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
  },
  {
    id: 11,
    name: "Others",
    bgImage:
      "https://m.media-amazon.com/images/M/MV5BYTNmNTBlYzUtNTFiNS00YmY4LWJiMWYtZTlmNmY3ODFlMTUxXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
  },
];

const statusArray = [
  {
    id: 1,
    name: "Watching",
    textcolor: "text-blue-500",
    bgcolor: "dark:bg-blue-500",
    bgcolorHover: "dark:hover:bg-blue-600",
  },
  {
    id: 2,
    name: "Reading",
    textcolor: "text-purple-500",
    bgcolor: "dark:bg-purple-500",
    bgcolorHover: "dark:hover:bg-purple-600",
  },
  {
    id: 3,
    name: "Completed",
    textcolor: "text-green-500",
    bgcolor: "dark:bg-green-500",
    bgcolorHover: "dark:hover:bg-green-600",
  },
  {
    id: 4,
    name: "On Hold",
    textcolor: "text-yellow-500",
    bgcolor: "dark:bg-yellow-500",
    bgcolorHover: "dark:hover:bg-yellow-600",
  },
  {
    id: 5,
    name: "Dropped",
    textcolor: "text-red-500",
    bgcolor: "dark:bg-red-500",
    bgcolorHover: "dark:hover:bg-red-600",
  },
  // {
  //   id: 6,
  //   name: "Plan to Watch",
  //   textcolor: "text-slate-700",
  //   bgcolor: "dark:bg-slate-700",
  //   bgcolorHover: "dark:hover:bg-slate-800",
  // },
];

const getCategoryRibbonStyle = (categoryName) => {
  switch (categoryName) {
    case "Anime":
      return "from-red-500 via-orange-500 to-yellow-500";
    case "Movie":
      return "from-cyan-700 via-blue-500 to-indigo-600";
    case "TV Show":
      return "from-indigo-500 via-purple-500 to-pink-500";
    case "OVA":
      return "from-pink-500 via-red-500 to-orange-500";
    case "ONA":
      return "from-cyan-400 via-blue-400 to-indigo-400";
    case "Manga":
      return "from-yellow-500 via-orange-500 to-red-500";
    case "Manhwa":
      return "from-amber-500 via-orange-500 to-red-500";
    case "Light Novel":
      return "from-blue-500 via-cyan-500 to-teal-500";
    case "Novel":
      return "from-purple-500 via-indigo-500 to-blue-500";
    case "Web Series":
      return "from-lime-500 via-green-500 to-emerald-500";
    default:
      return "from-rose-500 via-pink-500 to-red-500";
  }
};

const sheetURL =
  "https://docs.google.com/spreadsheets/d/1UIAhtWf9cUk_W4tSxlrGI5-562yOaXBFTxz74vlgmUY/gviz/tq?tqx=out:json";

export { category, statusArray, sheetURL, getCategoryRibbonStyle };
