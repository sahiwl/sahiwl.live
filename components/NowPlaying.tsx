import { getNPsong, getTopTrack } from "@/lib/spotifyData";
import { NowPlayingRes, TopTracksRes } from "@/lib/types";
import { useEffect, useState } from "react";

export function NowPlaying(){
    const [data, setData] = useState<NowPlayingRes[]>([])

    useEffect(()=>{
        const fetchData = async ()=>{
           const res = await getNPsong();
           setData(res.recenttracks.track)
        }
            // console.log(res.recenttracks.track);
            fetchData()
    },[])
    return(
        <div className="bg-background flex flex-col gap-4 justify-start items-center container font-exo2 pb-10 px-40">
            {data.length > 0 && (
                <div className="flex flex-col gap-2 w-1/2 p-4 rounded-lg shadow-lg border bg-gradient-to-r  dark:from-[#18181b] dark:via-custom-dark dark:to-neutral-900 border-zinc-700 ">
                    <h2 className="text-2xl font-semibold">Now Playing</h2>
                    {data.map((track: any, index: number) => {
            const isPlaying = track["@attr"]?.nowplaying === "true";
            const songName = track.name;
            const artist = track.artist["#text"];
            const url = track.url;
            const imageURL = track.image.find((img: any) => img.size === "medium")["#text"];
            return (
                <div
                  key={index}
                  className="flex gap-2 p-1 rounded-lg shadow-lg border bg-transparent backdrop-blur-3xl hover:dark:bg-slate-800 hover:bg-slate-300 dark:border-neutral-800 border-neutral-300 w-full"
                >
                  <img
                    src={imageURL}
                    alt={songName}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="flex flex-row justify-between items-center font-exo2 w-full gap-2">
                    <div>
                      <span className="block text-sm text-neutral-400">
                        {isPlaying ? "Currently Playing" : "Last Played"}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold"
                      >
                        {songName}
                      </a>
                      <p className="text-neutral-500">{artist}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }