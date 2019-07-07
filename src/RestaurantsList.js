import React from "react";
import { Box, Flex } from "rebass";

import Container from "./Container";
import Restaurant from "./Restaurant";
import RestaurantCount from "./RestaurantCount";

export default function({ restaurants }) {
  return (
    <Container>
      <RestaurantCount count={restaurants.length} />

      <Flex flexWrap="wrap">
        {restaurants.slice(-9).map(({ id, ...restaurant }) => (
          <Restaurant key={id} {...restaurant} />
        ))}
      </Flex>
    </Container>
  );
}
