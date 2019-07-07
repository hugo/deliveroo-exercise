import React from "react";
import Media from "react-media";

export default function HideSmall({ children }) {
  return (
    <Media query="(min-width: 30rem)">
      {matches => (matches ? children : null)}
    </Media>
  );
}
