import React from "react";

// Define a techColorMap where tech names are normalized (no versions included).
const techColorMap = {
  React: { bg: "#61DAFB", text: "#000000" },
  "Next.js": { bg: "#000000", text: "#ffffff" },
  Angular: { bg: "#DD0031", text: "#ffffff" },
  Node: { bg: "#68A063", text: "#ffffff" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  HTML: { bg: "#E34F26", text: "#ffffff" },
  CSS: { bg: "#1572B6", text: "#ffffff" },
  Python: { bg: "#3776AB", text: "#ffffff" },
  Java: { bg: "#007396", text: "#ffffff" },
  "C#": { bg: "#239120", text: "#ffffff" },
};

const Chip = ({ tech }) => {
  // Normalize the tech name by stripping versions and extra details.
  const normalizedTech = tech.split(/[\s\d+.-]+/)[0]; // Extract the base tech name (e.g., "Angular" from "Angular 2+").
  
  const colors = techColorMap[normalizedTech] || {
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
