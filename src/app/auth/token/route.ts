import { cookies } from "next/headers";

export async function GET() {
  const access_token = cookies().get("access_token");
  if (!access_token) {
    return new Response(JSON.stringify({ error: "Access token not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify({ access_token: access_token.value }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
