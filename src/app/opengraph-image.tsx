import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Buyeto — The infrastructure behind Africa's next generation of businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/Buyeto-white.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "90px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} height={132} alt="" />
        <div
          style={{
            marginTop: 48,
            fontSize: 46,
            fontWeight: 600,
            color: "#ffffff",
            maxWidth: 920,
            lineHeight: 1.3,
          }}
        >
          The infrastructure behind Africa&apos;s next generation of
          businesses.
        </div>
      </div>
    ),
    { ...size },
  );
}
