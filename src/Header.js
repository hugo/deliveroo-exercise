import React from "react";
import { Box, Button } from "rebass";

import Adelle from "./Adelle";
import Container from "./Container";
import Stratos from "./Stratos";

export default function({ neighborhood }) {
  return (
    <Box backgroundColor="teal" p={3}>
      <Container p={2}>
        <Adelle as="h1" my={1} fontSize={1} fontWeight="700" color="darkteal">
          Location
        </Adelle>

        <Stratos as="h2" my={1} fontSize={2} fontWeight="400" color="white">
          {neighborhood}
        </Stratos>

        <Button
          backgroundColor="white"
          color="teal"
          fontWeight="400"
          fontSize={1}
          mt={3}
        >
          Change Location
        </Button>
      </Container>
    </Box>
  );
}
