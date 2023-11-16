import React, { useState } from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';

const partnerLogos = [
'/IOU-Logo-website.svg',
  '/adunchem.jpeg',
  '/mcdopics2.jpg',
  '/cab1.png',
  '/au-logo.jpg',
  
  // Add more logo paths as needed
];

const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + partnerLogos.length) % partnerLogos.length);
  };

  return (
    <Flex align="center" justify="center" direction="column" bg={'gray.100'}>
      <Flex
        css={css`
          overflow: hidden;
          width: 100%; 
        `}
        gap={200}
      >
        {partnerLogos.map((logo, index) => (
          <Box
            key={index}
            transform={`translateX(${(index - activeIndex) * 100}%)`}
            transition="transform 0.5s"
            boxSize="full"
          >
            <Image src={`${logo}`} alt={`Partner Logo ${index}`} />
          </Box>
        ))}
      </Flex>
      <Flex mt={4}>
        <Button onClick={handlePrev} mr={2} leftIcon={<ChevronLeftIcon />} disabled={activeIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} ml={2} rightIcon={<ChevronRightIcon />} disabled={activeIndex === partnerLogos.length - 1}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default PartnerSlider;