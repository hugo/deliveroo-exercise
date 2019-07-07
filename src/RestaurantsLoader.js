import React from "react"

import { neighborhood, restaurants } from "./restaurants.json"

export default function({ children }) {
  return children({ neighborhood, restaurants })
}
