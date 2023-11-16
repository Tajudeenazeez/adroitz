'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Testimonial</Heading>
          <Text>We have produce students around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Software Development Training</TestimonialHeading>
              <TestimonialText>
              Enrolling in the software development training was a game-changer for me. The hands-on approach and real-world projects gave me the practical skills I needed to excel in the industry. The instructors were knowledgeable and supportive, providing valuable insights that went beyond the curriculum.
               I highly recommend this training to anyone serious about a career in software development
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/ibukun.jpeg"}
              name={'Ibukun Peter Balogun'}
              title={'Mobile Engineer @ Kelmarid'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Software Bootcamp</TestimonialHeading>
              <TestimonialText>
              I cant express how much I gained from the bootcamp. The comprehensive curriculum covered everything from frontend to backend techniques. The instructors were not only experts in the field but also great mentors, always willing to clarify doubts. The practical exercises were instrumental in building my confidence, and I now feel well-equipped to tackle real-world programming challenges
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"balogun.jfif"
              }
              name={'Balogun Abdulganeey'}
              title={'Frontend Developer @ Accountable'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Nice curriculum</TestimonialHeading>
              <TestimonialText>
              Attending the UX/UI design workshop was a turning point in my career. The practical design challenges and critiques from experienced professionals significantly improved my design thinking and problem-solving skills. The small class size allowed for personalized attention, and the collaborative atmosphere fostered creativity. I am grateful for the skills and confidence gained during this workshop
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
              "toheeb.jpeg"
              }
              name={'Toheeb Yusuf Olawale'}
              title={'Product Designer @ Carter Biggs'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}