const category = [
  {
    id: 1,
    name: "Anime",
    bgImage: "https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
  },
  {
    id: 2,
    name: "Manga",
    bgImage: "https://cdn.myanimelist.net/images/anime/1463/145502.jpg",
  },
  {
    id: 3,
    name: "Light Novel",
    bgImage: "https://cdn.myanimelist.net/images/manga/2/257957.jpg",
  },
  {
    id: 4,
    name: "Web Novel",
    bgImage: "https://cdn.myanimelist.net/images/manga/3/248674.jpg",
  },
  {
    id: 5,
    name: "Movie",
    bgImage: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
  },
  {
    id: 6,
    name: "TV Show",
    bgImage: "https://cdn.myanimelist.net/images/anime/1614/90408.jpg",
  },
  {
    id: 7,
    name: "OVA",
    bgImage: "https://cdn.myanimelist.net/images/anime/1862/121020.jpg",
  },
  {
    id: 8,
    name: "ONA",
    bgImage: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
  },
  {
    id: 9,
    name: "Web Series",
    bgImage:
      "https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
  },
  {
    id: 10,
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
    name: "Completed",
    textcolor: "text-green-500",
    bgcolor: "dark:bg-green-500",
    bgcolorHover: "dark:hover:bg-green-600",
  },
  {
    id: 3,
    name: "On Hold",
    textcolor: "text-yellow-500",
    bgcolor: "dark:bg-yellow-500",
    bgcolorHover: "dark:hover:bg-yellow-600",
  },
  {
    id: 4,
    name: "Dropped",
    textcolor: "text-red-500",
    bgcolor: "dark:bg-red-500",
    bgcolorHover: "dark:hover:bg-red-600",
  },
  {
    id: 5,
    name: "Plan to Watch",
    textcolor: "text-slate-700",
    bgcolor: "dark:bg-slate-700",
    bgcolorHover: "dark:hover:bg-slate-800",
  },
];

const tags = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror"];

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Watchlist",
    href: "/watchlist",
  },
  {
    id: 3,
    name: "Category",
    href: "/category",
  },
];

export { category, statusArray, links };
