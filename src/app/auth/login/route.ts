import { generateRandomString } from "@/lib/utils";
import { NextResponse } from "next/server";

const spotify_client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID; // Ensure this is defined

export async function GET() {
  const scope =
    "user-read-email user-read-private user-read-currently-playing user-read-playback-state";

  const state = generateRandomString(16);

  if (!spotify_client_id) {
    throw new Error("SPOTIFY_CLIENT_ID is not defined");
  }

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: "http://localhost:3000/auth/callback",
    state: state,
  });

  return NextResponse.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString(),
  );
}
