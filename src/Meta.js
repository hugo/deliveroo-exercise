import React from "react";

import Adelle from "./Adelle";

export default function Meta({ price = 0, tags = [] }) {
  const priceSymbols = new Array(price).fill("£").join(""); // Note, no i18n
  const meta = [...tags, priceSymbols].join(" • ");

  return (
    <Adelle color="lightgray" fontSize={0}>
      {meta}
    </Adelle>
  );
}
