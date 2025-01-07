const category = [
  {
    id: 1,
    name: "Anime",
    bgImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuxE7z7dj2nEuRBvRBYekdz1NDVTZmg8ciQ&s",
  },
  {
    id: 2,
    name: "Manga",
    bgImage: "https://cdn.myanimelist.net/images/anime/1463/145502.jpg",
  },
  {
    id: 3,
    name: "Movie",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
  {
    id: 4,
    name: "TV Show",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
  {
    id: 5,
    name: "OVA",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
  {
    id: 6,
    name: "ONA",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
  {
    id: 7,
    name: "Web Series",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
  {
    id: 8,
    name: "Others",
    bgImage:
      "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
  },
];

const statusArray = [
  {
    id: 1,
    name: "Watching",
    bgcolor: "dark:bg-blue-500",
    bgcolorHover: "dark:hover:bg-blue-600",
  },
  {
    id: 2,
    name: "Completed",
    bgcolor: "dark:bg-green-500",
    bgcolorHover: "dark:hover:bg-green-600",
  },
  {
    id: 3,
    name: "On Hold",
    bgcolor: "dark:bg-yellow-500",
    bgcolorHover: "dark:hover:bg-yellow-600",
  },
  {
    id: 4,
    name: "Dropped",
    bgcolor: "dark:bg-red-500",
    bgcolorHover: "dark:hover:bg-red-600",
  },
  {
    id: 5,
    name: "Plan to Watch",
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
