import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Didier";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: "white",
          background:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🏠
      </div>
    ),
    {
      ...size,
    }
  );
}
