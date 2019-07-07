import React from "react";
import { Box } from "rebass";

import Container from "./Container";
import Stratos from "./Stratos";

export default function() {
  return (
    <Box backgroundColor="teal" p={4}>
      <Container p={2}>
        <Stratos as="h2" fontSize={4} fontWeight="400" color="white">
          Deliveroo
        </Stratos>
      </Container>
    </Box>
  );
}
