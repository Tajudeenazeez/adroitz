import React, { useState } from "react";

import {
  Button,
  Box,
  Flex,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import MenuDrawer from "./MenuDrawer";
import Link from "./NavLink";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display={{ base: "block", md: "none" }}>
      <Button
        colorScheme="white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <CloseIcon color="gold" w={8} h={8} />
        ) : (
          <HamburgerIcon color="gold" w={10} h={10} />
        )}
      </Button>
      {isOpen ? (
        <Flex
          bg="darkBlue"
          pos="fixed"
          top="70px"
          left="0"
          w="100vw"
          h="auto"
          p={4}
          zIndex={20}
          flexDir="column"
        >
          <VStack alignItems="flex-start">
            <Link
              color="white"
              _hover={{ color: "bgOrange" }}
              pathName="HOME"
            />
            <Accordion border="none" borderWidth={0}>
              <AccordionItem borderWidth={0}>
                <AccordionButton p={0} border="none" borderWidth={0}>
                  <Box color="white" textAlign="left">
                    PROGRAMS
                  </Box>
                  <AccordionIcon color="white" />
                </AccordionButton>
                <AccordionPanel border="none" borderWidth={0} pb={4}>
                  <Box mb={4}>
                    <Link
                      color="white"
                      _hover={{ color: "bgOrange" }}
                      pathName="Summer Coding Bootcamp(Kids)"
                    />
                  </Box>
                  <Box>
                    <Link
                      color="white"
                      _hover={{ color: "bgOrange" }}
                      pathName="Adult Programs"
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Link
              color="white"
              _hover={{ color: "bgOrange" }}
              pathName="ABOUT"
            />
            <Link
              color="white"
              _hover={{ color: "bgOrange" }}
              pathName="CONTACT"
            />
          </VStack>
        </Flex>
      ) : null}
    </Box>
  );
};

export default MobileNav;

{
  /* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */
}
