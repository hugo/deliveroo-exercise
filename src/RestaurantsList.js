import React from "react";

export default function({ restaurants }) {
  return <pre>{JSON.stringify(restaurants, null, 2)}</pre>;
}
