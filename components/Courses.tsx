import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Link from "./NavLink";

interface CoursesProps {
  title: string;
  children: React.ReactNode;
}

const Courses: React.FC<CoursesProps> = ({ children, title }) => {
  return (
    <Box bg="white" p={10}>
      <Heading marginBottom={10} textAlign="center">
        {title}
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={20}>
        {children}
      </SimpleGrid>
      <Box textAlign="center" marginTop={10}>
        <Link
          type="button"
          pathName="https://forms.gle/x9hDDGnEUJHwFuUJA"
          isExternal
          text="Register for a class"
        />
      </Box>
    </Box>
  );
};

export default Courses;
