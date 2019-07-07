import React from "react";
import { Flex } from "rebass";

import Container from "./Container";

import logoIcon from "./svg/logo-icon.svg";
import userIcon from "./svg/user-icon.svg";

export default function TopNav() {
  return (
    <Container p={3}>
      <Flex justifyContent="space-between">
        <img src={logoIcon} />
        <img src={userIcon} />
      </Flex>
    </Container>
  );
}
