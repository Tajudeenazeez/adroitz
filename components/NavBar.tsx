import React from "react";
import { HStack, MenuItem } from "@chakra-ui/react";
import Link from "./NavLink";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
  return (
    <HStack display={{ base: "none", md: "block" }} spacing={8}>
      <Link pathName="HOME" />
      <MenuDrawer name="PROGRAMS">
        <MenuItem bg="transparent">
          <Link
            color="white"
            _hover={{ color: "bgOrange" }}
            pathName="Summer Coding Bootcamp(Kids)"
          />
        </MenuItem>
        <MenuItem bg="transparent">
          <Link
            color="white"
            _hover={{ color: "bgOrange" }}
            pathName="Adult Programs"
          />
        </MenuItem>
      </MenuDrawer>
      <Link pathName="ABOUT" />
      <Link pathName="CONTACT" />
    </HStack>
  );
};

export default NavBar;
