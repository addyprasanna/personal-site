import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fcfbf8",
          color: "#1a1916",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>{site.shortName}</div>
          <div style={{ fontSize: 34, color: "#6b6760", maxWidth: 960, lineHeight: 1.35 }}>
            I build software for messy real-world operations. Product engineer at Kaya AI.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#b4521a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#b4521a" }} />
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
