import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = `${site.name} — ${site.role} at ${site.company}`;
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
          padding: 72,
          background: "linear-gradient(135deg, #050507 0%, #0b0b12 60%, #0a0f14 100%)",
          color: "#ececf1",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0.06) 40%, rgba(34,211,238,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -100,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(167,139,250,0.05) 40%, rgba(167,139,250,0) 68%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#9a9aa6" }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#22d3ee", boxShadow: "0 0 18px #22d3ee" }} />
          {site.role} · {site.company}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 32, color: "#9a9aa6", maxWidth: 900, lineHeight: 1.3 }}>
            I build useful systems with data, AI &amp; product sense.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#5e5e6a" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span>{site.location} · OSU {site.gradYear}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
