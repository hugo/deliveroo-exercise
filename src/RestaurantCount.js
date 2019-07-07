import React from "react"
import { Box } from "rebass"

import Adelle from "./Adelle"
import HideSmall from "./HideSmall"

export default function({ count }) {
  return (
    <HideSmall>
      <Box px={3} mt={3}>
        <Adelle color="lightgray" fontSize={1}>
          {count} {count === 1 ? "restaurant" : "restaurants"}
        </Adelle>
      </Box>
    </HideSmall>
  )
}
