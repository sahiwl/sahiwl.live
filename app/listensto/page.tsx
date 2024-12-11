"use client";
import { useEffect, useState } from "react";
import { TopArtists } from "@/lib/types";
import { getTopArtist } from "@/lib/spotifyData";

export default function Page() {
    const [data, setData] = useState<TopArtists[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopArtist();
            setData(response.topartists.artist); // Update with parsed data
            
        };
        
        fetchData();
    }, []);

    return (
        <div className="bg-background min-w-screen min-h-screen flex flex-col gap-4 justify-start items-center p-4">
            {data.length > 0 && (
                <div className="flex flex-col gap-2 w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-zinc-200">
                    <h2 className="text-2xl font-semibold">Top Artists</h2>
                    {data.map((artist, index) => (
                        <div
                            key={index}
                            className="flex gap-2 p-4 rounded-lg shadow-lg border border-zinc-200 w-full"
                        >
                            <img src={artist.image[1]["#text"]} alt={artist.name} />
                            <div className="flex flex-col gap-2">
                                <a
                                    href={artist.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary font-bold"
                                >
                                    {artist.name}
                                </a>
                                <p>Playcount: {artist.playcount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}