import React from "react";
import { Menu, MenuButton, Button, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface MenuDrawerProps {
  name: string;
  children: React.ReactNode;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ name, children }) => {
  return (
    <Menu>
      <MenuButton
        bg="white"
        fontWeight="400"
        _hover={{ bg: "white" }}
        _expanded={{ bg: "white" }}
        _focus={{ bg: "white" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {name}
      </MenuButton>
      <MenuList bg="darkBlue">{children}</MenuList>
    </Menu>
  );
};

export default MenuDrawer;
