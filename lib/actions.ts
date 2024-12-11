"use server";

import { TopArtistsRes } from "./types";

const lastfmBaseURL = "https://ws.audioscrobbler.com/2.0/";

export async function getTopArtists(): Promise<TopArtistsRes> {
  const response = await fetch(
    `${lastfmBaseURL}?method=user.gettopartists&user=redgy01&api_key=${process.env.LASTFM_API_KEY}&format=json`
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data;
} 
