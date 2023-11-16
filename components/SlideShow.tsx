import React from "react";
import { Container, Heading, Text, Box, VStack } from "@chakra-ui/react";
import Link from "./NavLink";

interface SlideItemProps {
  heading: string;
  subHeading: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ heading, subHeading }) => {
  return (
    <VStack
      display="inline-flex"
      w="100vw"
      h="calc(100vh - 70px)"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      spacing={6}
      p={4}
    >
      <Heading fontSize={{ base: "lg" }} color="white">
        {heading}
      </Heading>
      <Text fontSize={{ base: "xs", lg: "lg" }} color="white">
        {subHeading}
      </Text>
      <Link
        type="button"
        pathName="https://forms.gle/x9hDDGnEUJHwFuUJA"
        isExternal
        text="Get Started For Free"
      />
    </VStack>
  );
};

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);
  const timeOutRef = React.useRef<any>(null);

  function resetTimeOut() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeOut();
    timeOutRef.current = setTimeout(() => {
      setIndex((prevIndex) => {
        return prevIndex === 2 ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => {
      resetTimeOut();
    };
  }, [index]);

  return (
    <Container minW="100vw" bg="rgba(0,0,0,.4)" overflow="hidden">
      <Box
        w="100vw"
        transition="all .25s ease-in"
        transform={`translate3D(${-index * 100}%,0,0)`}
        whiteSpace={"nowrap"}
      >
        <SlideItem
          heading="WEEKEND CLASSES"
          subHeading="Physical (In-person) and Virtual (Online) Coding Classes"
        />
        <SlideItem
          heading="ADULT CLASSES"
          subHeading="Physical (In-person) and Virtual (Online) Coding Classes"
        />
        <SlideItem
          heading="SUMMER BOOTCAMP CLASSES"
          subHeading="Physical (In-person) and Virtual (Online) Coding Classes"
        />
      </Box>
    </Container>
  );
};

export default SlideShow;
