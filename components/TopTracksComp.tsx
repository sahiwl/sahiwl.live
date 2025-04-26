import { getTopTrack } from "@/lib/spotifyData";
import { TopTracksRes } from "@/lib/types";
import { useEffect, useState } from "react";

export function TopTracksComp() {
  const [data, setData] = useState<TopTracksRes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopTrack();
      setData(res.toptracks.track);
    };
    fetchData();
  }, []);
  return (
    <section className="flex flex-col gap-4 md:mt-0 mt-8  justify-between items-center w-3/4 md:pt-8 prose font-exo2 mb-12">
      {data.length > 0 && (
        <div className="flex flex-col gap-2  md:w-1/2 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold">Top Tracks</h2>
          <p className="mb-2 text-sm font-extralight dark:text-gray-400 font-exo2 -mt-3">according to last 4 weeks</p>
          {data.map((track, index) => (
            <div
              key={index}
              className="flex gap-2 p-1 rounded-lg shadow-lg border bg-transparent backdrop-blur-3xl dark:hover:bg-neutral-800 hover:bg-neutral-200 dark:border-neutral-800 border-neutral-300 w-full"
            >
              {/* <img src={artist.image[1]["#text"]} alt={artist.name} /> */}
              <div className="flex flex-row justify-between items-center font-spacegrotesk w-full gap-2">
                <div className="">
                  <a
                    href={track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-md"
                  >
                    {track.name}
                  </a>
                  <p className="font-extralight text-xs dark:text-gray-400 text-zinc-950">{track.artist.name}</p>
                </div>
                <p className="text-right ">{track.playcount}
                  <span className="font-extralight dark:text-gray-500 text-sm"> plays</span></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
