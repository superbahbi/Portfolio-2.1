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
          backgroundColor: "#0b0b0c",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.14)",
            backgroundColor: "#111113",
            color: "#fafafa",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              letterSpacing: "0.24em",
              color: "#a1a1aa",
            }}
          >
            <div style={{ width: 40, height: 1, backgroundColor: "#52525b" }} />
            PORTFOLIO
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 104,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              Bobby Lee
            </div>
            <div style={{ fontSize: 36, color: "#d4d4d8" }}>
              Full Stack Software Engineer
            </div>
            <div style={{ fontSize: 28, color: "#71717a" }}>
              San Luis Obispo, CA
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              color: "#52525b",
            }}
          >
            <div>Typescript · React · React Native</div>
            <div>Bobby Lee</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
