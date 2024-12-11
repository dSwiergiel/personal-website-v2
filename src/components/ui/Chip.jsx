import React from "react";

const techColorMap = {
  React: { bg: "#61DAFB", text: "#000000" },
  "Next.js": { bg: "#000000", text: "#ffffff" },
  "Angular 2+": { bg: "#DD0031", text: "#ffffff" },
  "Node.js": { bg: "#68A063", text: "#ffffff" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  HTML: { bg: "#E34F26", text: "#ffffff" },
  CSS: { bg: "#1572B6", text: "#ffffff" },
  Python: { bg: "#3776AB", text: "#ffffff" },
  Java: { bg: "#007396", text: "#ffffff" },
  "C#": { bg: "#239120", text: "#ffffff" },
};

const Chip = ({ tech }) => {
  const colors = techColorMap[tech] || {
    bg: "#808080",
    text: "#ffffff",
  };

  return (
    <div
      className="badge px-2 py-1 mr-2 rounded-pill d-inline-block"
      style={{
        backgroundColor: colors.bg,
        opacity: 0.9,
        color: colors.text,
        fontSize: "10px",
      }}
    >
      {tech}
    </div>
  );
};

export default Chip;
