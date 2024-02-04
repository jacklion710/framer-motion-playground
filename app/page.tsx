"use client"
import React, { useState } from 'react';
import MotionFade from '../components/MotionSlide';
import MotionRotate from '../components/MotionSlide';
import MotionScale from '../components/MotionSlide';
import MotionSlide from '../components/MotionSlide';
import { 
  Center,
  VStack, 
  Button,
  ChakraProvider,
  Image
} from '@chakra-ui/react';

export default function Home() {
  const [animateFade, setAnimateFade] = useState(false);
  const [animateRotate, setAnimateRotate] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [animateScale, setAnimateScale] = useState(false);

  return (
    <ChakraProvider>
      <VStack spacing={8} align="stretch">

        <Center>
          <MotionFade duration={1} easing="easeOut" trigger={animateFade}>
            <Image src="/next.svg" alt="Next.js logo" boxSize="25%" />
          </MotionFade>
          <Button colorScheme="blue" onClick={() => setAnimateFade(!animateFade)}>Trigger Fade</Button>
        </Center>

        <Center>
          <MotionRotate in={animateRotate} duration={0.5} trigger={animateRotate} easing="easeIn">
            <Image src="/vercel.svg" alt="Vercel logo" boxSize="25%" />
          </MotionRotate>
          <Button colorScheme="blue" onClick={() => setAnimateRotate(!animateRotate)}>Trigger Rotate</Button>
        </Center>
        
        <Center>
          <MotionSlide in={animateSlide} duration={1} trigger={animateSlide}  easing="easeOut">
            <Image src="/next.svg" alt="Next.js logo" boxSize="25%" />
          </MotionSlide>
          <Button colorScheme="blue" onClick={() => setAnimateSlide(!animateSlide)}>Trigger Slide</Button>
        </Center>

        <Center>
          <MotionScale in={animateScale} duration={0.5} trigger={animateScale} easing="easeIn">
            <Image src="/vercel.svg" alt="Vercel logo" boxSize="25%" />
          </MotionScale>
          <Button colorScheme="blue" onClick={() => setAnimateScale(!animateScale)}>Trigger Scale</Button>
        </Center>

      </VStack>
    </ChakraProvider>
  );
}