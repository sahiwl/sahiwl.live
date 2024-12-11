"use server"
export async function getTopArtist(){
    const api = process.env.LASTFM_APIKEY;
   const response =  await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=redgy01&api_key=${api}&format=json&limit=10&period=1month`, {
                headers:{
                    "Content-Type": "application/json",
                }
            }
    );
    console.log("API: ", api);
    return response.json(); // Parse the response
}

export async function getNPsong() {
    return fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=redgy01&api_key=${process.env.LASTFM_APIKEY}&format=json&limit=2`, {
            headers:{
                "Content-Type": "application/json",
            }
        }
    )
}

export async function getTopTrack() {
    return fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=redgy01&api_key=${process.env.LASTFM_APIKEY}&format=json&limit=10&period=1month`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }