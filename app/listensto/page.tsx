"use client";
import { useEffect, useState } from "react";
import { TopArtists } from "@/lib/types";
import { getTopArtist } from "@/lib/spotifyData";
import TopArtistComp from "@/components/TopArtistComp";
import { TopTracksComp } from "@/components/TopTracksComp";
import { NowPlaying } from "@/components/NowPlaying";

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
    // <div className="bg-background min-w-screen min-h-screen flex  justify-center items-center container font-exo2">
    //w-full min-h-screen h-full p-8 flex flex-col items-center relative
    <div className="min-h-screen w-full h-full flex flex-col items-center md:pt-20">
      <NowPlaying />
      <TopArtistComp />
      <TopTracksComp />
    </div>
    //  </div>
  );
}
