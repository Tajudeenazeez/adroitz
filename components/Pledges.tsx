import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Pledge from "./Pledge";

const Pledges = () => {
  return (
    <Box bg="white" p={10}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
        <Pledge
          img="/first.jfif"
          title="A Memorable In-School Or Holiday Bootcamp Experience"
          subTitle=""
        />
        <Pledge
          img="/sec.jfif"
          title="Experienced & Friendly Tutors"
          subTitle="Our Tutors are mission driven and passionate to see students develop incredible innovation at an early age. They make classes fun and exciting for our Students."
        />
        <Pledge
          img="/banner.jpg"
          title="Small Class Guarantee"
          subTitle="Students progress at their own pace with 1-on-1 or small-group class."
        />
        <Pledge
          img="/third.jfif"
          title="Friendly Environment"
          subTitle="We Provide Convenient and Friendly environment for our Students."
        />
      </SimpleGrid>
    </Box>
  );
};

export default Pledges;
