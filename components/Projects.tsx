import React from "react";
import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/react";
import Project from "./Project";

const Projects = () => {
  return (
    <Box bg="white" p={10}>
        <Flex justifyContent={"center"} alignItems={"center"} fontSize={"4xl"}>
            <Text> Gallery</Text>
        </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, lg:3 }} spacing={5} >
        <Project
          img="/protutor.jpeg"
          title="Personalized Session"
          subTitle=""
        />
        <Project
          img="/progroup.jpeg"
          title="Peer programming"
          subTitle=""
        />
        <Project
          img="/proiougroup.jpeg"
          title="Coordinated classes"
          subTitle=""
        />
        <Project
          img="/proempty.jpeg"
          title="Conducive Environment"
          subTitle=""
        />
          <Project
          img="/FB_IMG_1671696668659.jpg"
          title="Young coders"
          subTitle=""
        />
          <Project
          img="/FB_IMG_1671696728081.jpg"
          title="Gender Balancing"
          subTitle=""
        />
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
