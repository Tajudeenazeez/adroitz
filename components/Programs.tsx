import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Program from "./Program";

const Programs = () => {
  return (
    <Box bg="white" p={10}>
      <Heading textAlign="center" mb={4}>
        OUR TRENDING PROGRAMS.
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={10}>
        <Program text="CODING & DIGITAL LITERACY CLASSES ONLINE & ONSITE " />
        <Program text="SUMMER CODING BOOTCAMP ONLINE & ONSITE (AGES 7 TO 16)" />
        <Program text="AFTER SCHOOL AND WEEKEND CODING CLASSES ONLINE & ONSITE " />
        <Program text="FRONT END AND BACK END PROGRAM FOR ADULT (3 MONTHS)" />
      </SimpleGrid>
    </Box>
  );
};

export default Programs;
