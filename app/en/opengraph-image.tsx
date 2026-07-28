import { ImageResponse } from "next/og";

export const alt = "David Nochi — Applied AI Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F4F7F5",
        color: "#0B1324",
        padding: 70,
        border: "18px solid #0B1324",
      }}
    >
      <div style={{ display: "flex", fontFamily: "monospace", fontSize: 24 }}>
        DN / APPLIED AI
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            maxWidth: 960,
            fontFamily: "sans-serif",
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          Problem → system → evidence → impact.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 42,
            color: "#2F6BFF",
            fontFamily: "monospace",
            fontSize: 24,
          }}
        >
          OCR · RAG · AGENTS · FULL STACK
        </div>
      </div>
    </div>,
    size,
  );
}
