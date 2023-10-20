import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <Flex
      height="70px"
      px={8}
      justifyContent="space-between"
      alignItems="center"
      bg="white"
    >
      <Heading>Cypherdevs</Heading>
      <NavBar />
      <MobileNav />
    </Flex>
  );
};

export default Header;
