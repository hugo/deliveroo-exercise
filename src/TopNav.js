import React from "react";
import { Box, Flex } from "rebass";

import Adelle from "./Adelle";
import Container from "./Container";
import HideSmall from "./HideSmall";

import logoIcon from "./svg/logo-icon.svg";
import logoHorizontal from "./svg/logo-horizontal.svg";
import userIcon from "./svg/user-icon.svg";

export default function TopNav() {
  return (
    <Container p={3}>
      <Flex justifyContent="space-between">
        <Box>
          <picture>
            <source media="(min-width: 30rem)" srcSet={logoHorizontal} />
            <img src={logoIcon} alt="Deliveroo logo" />
          </picture>
        </Box>

        <Flex alignItems="center">
          <img src={userIcon} />
          <HideSmall>
            <Adelle mt={1} ml={2} color="darkgrey" fontSize={1}>
              Jane Smith
            </Adelle>
          </HideSmall>
        </Flex>
      </Flex>
    </Container>
  );
}
