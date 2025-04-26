import { getNPsong, getTopTrack } from "@/lib/spotifyData";
import { NowPlayingRes, TopTracksRes } from "@/lib/types";
import { useEffect, useState } from "react";
import { AiOutlineSpotify } from "react-icons/ai";

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingRes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNPsong();
      setData(res.recenttracks.track);
    };
    // console.log(res.recenttracks.track);
    fetchData();
  }, []);
  return (
    <section className="flex flex-col gap-4 mt-16 lg:mt-0 md:mt-0 justify-between items-center w-3/4 md:pt-10 prose font-exo2">
      {data.length > 0 && (
        <div className="flex flex-col gap-2 w-full md:w-1/2 p-4 rounded-2xl shadow-2xl">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-semibold"></h2>
            <AiOutlineSpotify color="gray" size={30} />
          </div>
          {data.map((track: any, index: number) => {
            const isPlaying = track["@attr"]?.nowplaying === "true";
            const songName = track.name;
            const artist = track.artist["#text"];
            const url = track.url;
            const imageURL = track.image.find(
              (img: any) => img.size === "medium"
            )["#text"];
            return (
              <div
                key={index}
                className="flex gap-2 md:p-2 p-0 bg-transparent justify-between w-full"
              >
                <div className="h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 rounded-lg justify-center items-center flex shrink-0">
                  <img
                    src={imageURL}
                    alt={songName}
                    className="h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span className="text-sm text-right text-neutral-400">
                    {isPlaying ? "Currently Playing" : "Last Played"}
                  </span>
                  <div className="flex gap-2 font-spacegrotesk lg:gap-4 md:gap-3 text-sm lg:text-base md:text-base dark:text-zinc-200 text-zinc-900 w-full">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-md hover:underline"
                    >
                      {songName}
                    </a>
                    <p className="text-neutral-500 text-right">{artist}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
