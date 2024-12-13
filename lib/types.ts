export type NowPlayingRes = {
isPlaying: boolean;
songName: {
  name: string
};
artist: string;
url: string;
imageURL: string;
"@attr": {
    nowplaying: boolean;
  };
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
    artist: {
      name: string
    };
}

