import { getTopArtist } from "@/lib/spotifyData";
import { TopArtists } from "@/lib/types";
import { useEffect, useState } from "react";

export default function TopArtistComp() {
  const [data, setData] = useState<TopArtists[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopArtist();
      setData(response.topartists.artist); // Update with parsed data
    };
    fetchData();
  }, []);

  return (
    // flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose gap-6 mb-12
    <section className="flex flex-col gap-4 mt-8 md:mt-0 justify-between items-center w-3/4 md:pt-8 prose font-exo2">
      {/* <div className=""> */}

      {data.length > 0 && (
        <div className="flex flex-col gap-2  md:w-1/2 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold">Top Artists</h2>
          <p className="mb-2 font-exo2 -mt-3 text-sm font-extralight dark:text-gray-400">according to last 4 weeks</p>
          {data.map((artist, index) => (
            <div
              key={index}
              className="flex gap-2 p-2 rounded-lg shadow-lg border  bg-transparent backdrop-blur-3xl hover:dark:bg-neutral-900 hover:bg-neutral-200 dark:border-neutral-800 border-neutral-300 w-full"
            >
              {/* <img src={artist.image[1]["#text"]} alt={artist.name} /> */}
              <div className="flex flex-row justify-between items-center font-spacegrotesk w-full gap-2">
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary text-md"
                >
                  {artist.name}
                </a>
                <p className="text-right">{artist.playcount} <span className="font-extralight dark:text-gray-500 text-sm"> plays</span></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
