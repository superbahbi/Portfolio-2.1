import querystring from "querystring";
import Cookies from "js-cookie";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const QUEUE_ENDPOINT = `https://api.spotify.com/v1/me/player/queue`;

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

interface Token {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

const getCachedToken = (): Token | null => {
  const tokenString = Cookies.get("spotify_token");
  if (!tokenString) return null;

  try {
    const token = JSON.parse(tokenString) as Token;
    if (token.expires_at > Date.now()) {
      return token;
    }
    Cookies.remove("spotify_token");
  } catch (error) {
    console.error("Failed to parse cached token:", error);
    Cookies.remove("spotify_token");
  }
  return null;
};

const setCachedToken = (token: Token) => {
  Cookies.set("spotify_token", JSON.stringify(token), {
    secure: true,
    sameSite: "Strict",
  });
};

const fetchAccessToken = async (): Promise<Token> => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!response.ok) {
    console.error(
      "Failed to fetch access token:",
      response.status,
      response.statusText,
    );
    throw new Error("Failed to fetch access token");
  }

  const data = await response.json();
  const expires_in = data.expires_in || 3600; // Default to 1 hour if not provided

  const token: Token = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + expires_in * 1000,
  };

  setCachedToken(token);
  return token;
};

const getAccessToken = async (): Promise<string> => {
  let cachedToken = getCachedToken();
  if (cachedToken) {
    console.log("Using cached token", cachedToken);
    return cachedToken.access_token;
  }

  console.log("Refreshing token");
  cachedToken = await fetchAccessToken();
  console.log("New token fetched", cachedToken);
  return cachedToken.access_token;
};

export const getQueue = async () => {
  const access_token = await getAccessToken();

  const response = await fetch(QUEUE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    console.error(
      "Failed to fetch queue:",
      response.status,
      response.statusText,
    );
    throw new Error("Failed to fetch queue");
  }

  return response.json();
};

export async function getQueueItem() {
  try {
    const queue = await getQueue();

    return {
      current: {
        albumImageUrl: queue.currently_playing.album.images[0].url,
        artist: queue.currently_playing.artists
          .map((artist: { name: string }) => artist.name)
          .join(", "),
        songUrl: queue.currently_playing.external_urls.spotify,
        title: queue.currently_playing.name,
      },
      next: {
        song: queue.queue[0].name,
        artist: queue.queue[0].artists
          .map((artist: { name: string }) => artist.name)
          .join(", "),
      },
    };
  } catch (error) {
    console.error("Error fetching queue item:", error);
    return null;
  }
}
