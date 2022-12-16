import React from "react";
import Class from "./Class";
import {
  SimpleGrid,
  Box,
  Heading,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaPen, FaSchool } from "react-icons/fa";
import { MdGroups, MdOnlinePrediction } from "react-icons/md";
import Link from "../components/NavLink";
const Classes = () => {
  return (
    <Box p="48px" bg="white" maxW="100vw">
      <SimpleGrid
        mb="48px"
        columns={{ base: 1, lg: 4 }}
        spacing={10}
        overflow="hidden"
      >
        <Class
          icon={<Icon color="white" as={FaPen} />}
          name="1:1 Private Class"
        />
        <Class icon={<Icon color="white" as={MdGroups} />} name="Group Class" />
        <Class icon={<Icon color="white" as={FaSchool} />} name="School Club" />
        <Class
          icon={<Icon color="white" as={MdOnlinePrediction} />}
          name="Online Class"
        />
      </SimpleGrid>
      <Container maxW="90vw">
        <Heading>Start Coding Now!</Heading>
        <VStack spacing={8} my={8}>
          <Text>
            We teach kids Web Development, Games, and Robotics. We raise
            children who are sound in computer technological usage (coding) with
            adequate financial knowledge.
          </Text>
          <Text>
            in this digital world, children need to be taught early the use of
            computer codes in other to solve problem, create better chances for
            their future, and taught how to use their finances properly as they
            grow.
          </Text>
          <Text>
            Adroitz will help raise children who are responsible, who creates
            their own games using computer codes, creating apps, learn basics of
            building robots and creating websites. we also teach them what to do
            with the money that comes into their hands and entrepreneural
            skills.
          </Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={8}>
          <Heading size="md">
            Adults can learn frontend and backend for web development at
            affordable price too.
          </Heading>
          <Link
            type="button"
            pathName="https://docs.google.com/forms/d/e/1FAIpQLSdltDm3s9mSpshCEjhh81TI8ZhriSaXLJmHecauM0xfzdAc5w/viewform?usp=sf_link"
            isExternal
            text="Get Started For Free"
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default Classes;
