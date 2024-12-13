import { getTopArtist } from "@/lib/spotifyData";
import { TopArtists } from "@/lib/types";
import { useEffect, useState } from "react";

export default function TopArtistComp(){
    const [data, setData] = useState<TopArtists[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopArtist();
            setData(response.topartists.artist); // Update with parsed data
            
        };
        fetchData();
    }, []);

    return(
        <div className="bg-background min-h-screen min-w-screen flex flex-col gap-4 justify-start items-center container font-exo2 px-40 pt-40 -mb-20">
        {/* <div className=""> */}

            {data.length > 0 && (
                <div className="flex flex-col gap-2 w-1/2 p-4 rounded-lg shadow-lg border bg-gradient-to-r  dark:from-[#18181b] dark:via-custom-dark dark:to-neutral-900 border-zinc-700 ">
                    <h2 className="text-2xl font-semibold">Top Artists</h2>
                    <p className="mb-2 font-exo2 -mt-3">according to last 4 weeks</p>
                    {data.map((artist, index) => (
                        <div
                        key={index}
                        className="flex gap-2 p-2 rounded-lg shadow-lg border bg-transparent backdrop-blur-3xl hover:dark:bg-slate-800 hover:bg-slate-300 dark:border-neutral-800 border-neutral-300 w-full"
                        >
                            {/* <img src={artist.image[1]["#text"]} alt={artist.name} /> */}
                            <div className="flex flex-row justify-between items-center font-exo2 w-full gap-2">
                                <a
                                    href={artist.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary font-bold"
                                    >
                                    {artist.name}
                                </a>
                                <p className="text-right">{artist.playcount} Plays</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
    );
}