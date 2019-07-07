import React from "react";
import { Box, Button, Flex } from "rebass";

import Adelle from "./Adelle";
import Container from "./Container";
import Stratos from "./Stratos";

export default function({ neighborhood }) {
  return (
    <Box backgroundColor="teal">
      <Container p={3}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="center">
            <Adelle
              as="h1"
              m={0}
              fontSize={1}
              fontWeight="700"
              color="darkteal"
            >
              Location
            </Adelle>

            <Stratos as="h2" m={0} fontSize={2} fontWeight="400" color="white">
              {neighborhood}
            </Stratos>
          </Flex>

          <Flex
            width={[1, 1 / 2]}
            justifyContent={["flex-start", "flex-end"]}
            alignItems="center"
            mt={[3, 0]}
          >
            <Button
              backgroundColor="white"
              color="teal"
              fontWeight="400"
              fontSize={1}
            >
              Change Location
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
