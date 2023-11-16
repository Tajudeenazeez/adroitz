import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

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
      <Image src="/cypherdev.png" width={10} height={10} alt="cypherdevs"/>
      <Heading>Cypherdevs</Heading>
      <NavBar />
      <MobileNav />
    </Flex>
  );
};

export default Header;
