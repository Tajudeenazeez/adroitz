import React from "react";
import { Flex, Heading, VStack, Box, Button, Text } from "@chakra-ui/react";
import Link from "./NavLink";
import { FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const FooterHeader = ({ title }: { title: string }) => {
  return (
    <VStack alignItems="flex-start">
      <Heading color="white">{title}</Heading>
      <Box
        w="64px"
        h="6px"
        backgroundColor="bgOrange"
        borderTopWidth={1}
        borderTopColor="white"
      />
    </VStack>
  );
};

const Footer = () => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      justifyContent="space-between"
      bg="blue"
      p={10}
    >
      <VStack alignItems="flex-start">
        <FooterHeader title="Contacts" />
        <Button
          p={0}
          colorScheme="transparent"
          leftIcon={<CiLocationOn size={25} />}
          variant="solid"
        >
          <Text textAlign="justify">
            No 30, Western Reservoir Road <br /> Olorunshogo Ilorin Kwara State
          </Text>
        </Button>
        <Button
          p={0}
          colorScheme="transparent"
          leftIcon={<FaPhoneAlt />}
          variant="solid"
        >
          08071965540 08178435354
        </Button>
      </VStack>
      <VStack my={{ base: 10, lg: 0 }} alignItems="flex-start">
        <FooterHeader title="Quick Links" />
        <Link color="white" _hover={{ color: "bgOrange" }} pathName="HOME" />
        <Link color="white" _hover={{ color: "bgOrange" }} pathName="ABOUT" />
        <Link color="white" _hover={{ color: "bgOrange" }} pathName="CONTACT" />
      </VStack>
      <VStack spacing={0} alignItems="flex-start">
        <FooterHeader title="Social Links" />
        <Button p={0} colorScheme="transparent" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button p={0} colorScheme="transparent" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </VStack>
    </Flex>
  );
};

export default Footer;
