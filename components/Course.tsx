import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface CourseProps {
  src: string;
  title: string;
}

const Course: React.FC<CourseProps> = ({ src, title }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg="white"
      p={4}
      boxShadow="lg"
      h="288px"
    >
      <Box h="208px">
        <Image
          alt="course-look"
          src={`${src}`}
          height={208}
          width={208}
          quality={100}
        />
      </Box>

      <Heading mt={5} fontSize={20} textAlign="center">
        {title}
      </Heading>
    </Flex>
  );
};

export default Course;
