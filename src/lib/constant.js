const category = [
  "Anime",
  "Manga",
  "Movie",
  "TV Show",
  "OVA",
  "ONA",
  "Web Series",
  "Others",
];

const statusArray = [
  {
    id: 1,
    name: "Watching",
    bgcolor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Completed",
    bgcolor: "bg-green-500",
  },
  {
    id: 3,
    name: "On Hold",
    bgcolor: "bg-yellow-500",
  },
  {
    id: 4,
    name: "Dropped",
    bgcolor: "bg-red-500",
  },
  {
    id: 5,
    name: "Plan to Watch",
    bgcolor: "bg-slate-500",
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
