import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const spotify_client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID; // Ensure this is defined
const spotify_client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET; // Ensure this is defined

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const authOptions = {
    method: "POST",
    body: new URLSearchParams({
      code: code!,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: "authorization_code",
    }),
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
          "base64",
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions,
    );
    if (response.ok) {
      const body = await response.json();
      console.log(body);
      const res = new Response(null, {
        status: 302, // Use 302 for redirection
        headers: {
          Location: "/",
        },
      });
      return res;
    } else {
      return new Response("Failed to fetch access token", { status: 400 });
    }
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
