import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "West Coast Mesh - Decentralized Mesh Networking"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Logo - using text since we can't easily load external images in OG */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* WiFi Icon representation */}
        <div
          style={{
            fontSize: "120px",
            color: "#9CF25B",
            fontFamily: "monospace",
            lineHeight: 1,
          }}
        >
          📡
        </div>

        {/* WEST COAST MESH text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0",
          }}
        >
          <div
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#9CF25B",
              fontFamily: "monospace",
              lineHeight: 0.9,
              letterSpacing: "8px",
            }}
          >
            WEST
          </div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#9CF25B",
              fontFamily: "monospace",
              lineHeight: 0.9,
              letterSpacing: "8px",
            }}
          >
            COAST
          </div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#9CF25B",
              fontFamily: "monospace",
              lineHeight: 0.9,
              letterSpacing: "8px",
            }}
          >
            MESH
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#ECECEC",
            fontFamily: "monospace",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Decentralized Mesh Networking
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
