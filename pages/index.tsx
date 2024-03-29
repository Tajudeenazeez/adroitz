import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Image from "next/image";
import SlideShow from "../components/SlideShow";
import Classes from "../components/Classes";
import Programs from "../components/Programs";
import Pledges from "../components/Pledges";
import Course from "../components/Course";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import WithSpeechBubbles from "../components/Testimonial";
import PartnerSlider from "../components/Partners";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Cypherdevs</title>
        <meta name="description" content="Impact through code learning" />
        <link rel="icon" href="/cypherdev.ico" />
      </Head>
      <Box pos="relative" minH="100vh" overflow="hidden">
        <Box pos="absolute" zIndex={-10} inset={0}>
          <Image
            alt=""
            src="/herobg.jpg"
            layout="fill"
            // objectFit="cover"
            quality={100}
          />
        </Box>
        <Box>
          <Header />
          <SlideShow />
          <Classes />
          <Programs />
          <Pledges />

          <Courses title="Courses For Ages 7 - 12">
            <Course title="HTML & CSS" src="/hc.png" />
            <Course title="SCRATCH" src="/sc.png" />
            <Course title="PYTHON" src="/py.png" />
            <Course title="JAVASCRIPT" src="/js.png" />
          </Courses>
          <Courses title="Courses For Ages 17+">
            <Course title="HTML & CSS" src="/hc.png" />
            <Course title="FRONTEND" src="/fe.png" />
            <Course title="BACKEND" src="/be.jpg" />
            <Course title="FULLSTACK" src="/mam.png" />
          </Courses>
          <Projects/>
          <WithSpeechBubbles/>
          <PartnerSlider/>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
