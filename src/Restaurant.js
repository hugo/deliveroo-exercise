import React from "react"
import { Box } from "rebass"

import Stratos from "./Stratos"
import Meta from "./Meta"

export default function Restaurant({ id, name, image, url, price, tags }) {
  return (
    <Box px={3} my={3} width={[1, 1 / 2, 1 / 3]}>
      <img src={image} width="100%"></img>
      <Stratos fontWeight={600} color="darkgray">
        {name}
      </Stratos>
      <Meta price={price} tags={tags} />
    </Box>
  )
}
