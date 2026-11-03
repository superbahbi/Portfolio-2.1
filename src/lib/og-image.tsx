import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f0e8",
          color: "#1c1917",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#78716c",
          }}
        >
          <div style={{ width: 40, height: 1, backgroundColor: "#a8a29e" }} />
          Bobby Lee
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            Wanderer, former winemaker and software engineer.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#78716c",
              maxWidth: 760,
            }}
          >
            Going slowly. Not knowing much about what comes next.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#a8a29e",
          }}
        >
          <div>Small useful things over big clever ones.</div>
          <div>Bobby Lee</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
