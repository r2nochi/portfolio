import { ImageResponse } from "next/og";

export const alt = "David Nochi — Ingeniería de IA aplicada";
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
        padding: "70px",
        border: "18px solid #0B1324",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontFamily: "monospace",
          fontSize: 24,
          letterSpacing: 3,
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#2F6BFF",
          }}
        />
        DN / IA APLICADA
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
          Problema → sistema → evidencia → impacto.
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
          OCR · RAG · AGENTES · FULL STACK
        </div>
      </div>
    </div>,
    size,
  );
}
