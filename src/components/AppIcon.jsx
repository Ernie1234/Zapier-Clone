import React from "react";

function AppIcon({ color = "black", size = 25, name = "Icon" }) {
  return (
    <div color={color} size={size}>
      {name}
    </div>
  );
}

export default AppIcon;
