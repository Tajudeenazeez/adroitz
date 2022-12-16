import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

interface ClassProps {
  icon: React.ReactNode;
  name: string;
}

const Class: React.FC<ClassProps> = ({ icon, name }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      p={4}
      borderRadius={5}
      boxShadow="lg"
      border="gray.10"
      borderWidth="1px"
    >
      <Flex
        bg="bgOrange"
        w={16}
        h={16}
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Flex>
      <Heading size="lg" textAlign="center">
        {name}
      </Heading>
    </Flex>
  );
};

export default Class;
