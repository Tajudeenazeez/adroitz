import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";

interface PledgeProps {
  img: string;
  title: string;
  subTitle?: string;
}

const Pledge: React.FC<PledgeProps> = ({ img, title, subTitle }) => {
  return (
    <Box
      pos="relative"
      h={60}
      borderRadius={10}
      boxShadow="lg"
      border="gray.10"
      borderWidth="1px"
      overflow="hidden"
    >
      <Box pos="absolute" zIndex={1} inset={0}>
        <Image
          alt=""
          src={`${img}`}
          layout="fill"
          // objectFit="cover"
          quality={100}
        />
      </Box>
      <Flex
        pos="absolute"
        zIndex={2}
        inset={0}
        bg="rgba(0,0,0,.6)"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        p={4}
        color="white"
      >
        <Heading size="lg" textAlign="center">
          {title}
        </Heading>
        <Heading mt={5} size="sm" textAlign="center">
          {subTitle}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Pledge;
