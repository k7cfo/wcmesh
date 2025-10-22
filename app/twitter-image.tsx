import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "West Coast Mesh - Decentralized Mesh Networking"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const logoUrl = new URL("/images/wcmesh-logo.png", "https://wcmesh.com").toString()

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <img
          src={logoUrl || "/placeholder.svg"}
          alt="West Coast Mesh"
          width="400"
          height="400"
          style={{
            objectFit: "contain",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
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
