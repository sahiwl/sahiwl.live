export type NowPlayingRes = {
isPlaying: boolean;
songName: string;
artist: string;
songURL: string;
imageURL: string;
}

export type TopArtists = {
    streamable: string;
  image: {
    size: string;
    "#text": string;
  }[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };
  name: string;
}

export type TopArtistsRes={
    topartists:{
        artist: TopArtists[];
    }
}

export type TopTracksRes = {
    name: string;
    playcount: string;
    url: string;
    artist: string;
}

