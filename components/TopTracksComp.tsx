import { getTopTrack } from "@/lib/spotifyData";
import { TopTracksRes } from "@/lib/types";
import { useEffect, useState } from "react";

export function TopTracksComp(){
    const [data, setData] = useState<TopTracksRes[]>([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getTopTrack();
            setData(res.toptracks.track)

        }
        fetchData()
    },[])
    return(
        <div className="bg-background flex flex-col gap-4 justify-start items-center container font-exo2  pt-0 p-40">
            {data.length > 0 && (
                <div className="flex flex-col gap-2 w-1/2 p-4 rounded-lg shadow-lg border bg-gradient-to-r  dark:from-[#18181b] dark:via-custom-dark dark:to-neutral-900 border-zinc-700 ">
                    <h2 className="text-2xl font-semibold">Top Tracks</h2>
                    <p className="mb-2 font-exo2 -mt-3">according to last 4 weeks</p>
                    {data.map((track, index) => (
                        <div
                        key={index}
                        className="flex gap-2 p-1 rounded-lg shadow-lg border bg-transparent backdrop-blur-3xl hover:dark:bg-slate-800 hover:bg-slate-300 dark:border-neutral-800 border-neutral-300 w-full"
                        >
                            {/* <img src={artist.image[1]["#text"]} alt={artist.name} /> */}
                            <div className="flex flex-row justify-between items-center font-exo2 w-full gap-2">
                                <div className="">

                                <a
                                    href={track.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary font-bold"
                                    >
                                    {track.name}
                                </a>
                                <p>{track.artist.name}</p>
                                        </div>
                                <p className="text-right">{track.playcount} Plays</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
    );
}