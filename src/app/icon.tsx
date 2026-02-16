import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#0c0f16",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#00e5a0",
            fontFamily: "sans-serif",
            letterSpacing: -1,
          }}
        >
          M
        </span>
      </div>
    ),
    { ...size }
  );
}
