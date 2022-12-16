import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Link from './NavLink'
interface ProgramProps {
  text: string;
}

const Program: React.FC<ProgramProps> = ({ text }) => {
  return (
    <Flex
      h="288px"
      flexDir="column"
      alignItems="center"
      justifyContent="space-evenly"
      boxShadow="lg"
      borderRadius={5}
      p={4}
    >
      <Heading lineHeight={1.6} textAlign="center" fontSize="md">
        {text}
      </Heading>
      <Link
        type="button"
        pathName="https://docs.google.com/forms/d/e/1FAIpQLSdltDm3s9mSpshCEjhh81TI8ZhriSaXLJmHecauM0xfzdAc5w/viewform?usp=sf_link"
        isExternal
        text="Enroll"
      />
    </Flex>
  );
};

export default Program;
