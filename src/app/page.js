import Card from "@/components/ui/Card";
import axios from "axios";
export default async function Home() {
  // const response = await axios.get(`${process.env.BASE_URL}/api/watchlist`);
  // console.log(response.data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 tracking-wide">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl dark:text-blue-500">My Watchlist</h1>
        <div className="grid grid-rows-* grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
          <Card
            title="Naruto Shippuden lorem ipsem dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
          <Card
            title="Naruto"
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
          <Card
            title="Naruto"
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
          <Card
            title="Naruto Shippuden lorem ipsem dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
          <Card
            title="Naruto"
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
          <Card
            title="Naruto"
            thumbnail="https://cdn.myanimelist.net/images/manga/2/70963.jpg"
            category="Anime"
            genres="Action, Adventure, Comedy, Drama, Fantasy, Magic, Shounen"
            start_date="15/05/2024"
            end_date="09/06/2024"
            status="Watching"
            rating="8.5"
          />
        </div>
      </div>
    </div>
  );
}
