import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  const projects = ["mlfomo", "Backstep", "Memento", "Shotgun"];

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f4f3ef",
        color: "#171715",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "68px 76px 62px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "baseline", display: "flex" }}>
        <span
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          undefined.tools
        </span>
        <span
          style={{
            color: "#77766f",
            fontSize: 28,
            marginLeft: 16,
          }}
        >
          by Oliver Carabia
        </span>
      </div>

      <div
        style={{
          borderTop: "2px solid #d4d2cb",
          display: "flex",
          flexDirection: "column",
          paddingTop: 34,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project}
            style={{
              alignItems: "center",
              borderBottom: "1px solid #d4d2cb",
              color: index === 0 ? "#315f52" : "#171715",
              display: "flex",
              fontSize: 44,
              justifyContent: "space-between",
              letterSpacing: "-1.5px",
              padding: "10px 0",
            }}
          >
            <span>{project}</span>
            <span
              style={{
                color: "#77766f",
                fontSize: 20,
                letterSpacing: 0,
              }}
            >
              {index === 0 ? "live" : index === 1 ? "idea" : "wip"}
            </span>
          </div>
        ))}
      </div>
    </div>,
    socialImageSize,
  );
}
