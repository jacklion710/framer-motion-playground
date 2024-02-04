"use client"
import React, { useState } from 'react';
import MotionFade from '../components/MotionFade';
import MotionRotate from '../components/MotionRotate';
import MotionScale from '../components/MotionScale';
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
      <VStack spacing={20} align="stretch" mt={20}>

        <Center>
          <VStack spacing={10}>
            <MotionFade duration={1} easing="easeOut" trigger={animateFade}>
              <Image src="/next.svg" alt="Next.js logo" boxSize="100%" />
            </MotionFade>
            <Button colorScheme="blue" onClick={() => setAnimateFade(!animateFade)}>Trigger Fade</Button>
          </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionRotate in={animateRotate} duration={0.5} trigger={animateRotate} easing="easeIn">
              <Image src="/vercel.svg" alt="Vercel logo" boxSize="100%" />
            </MotionRotate>
            <Button colorScheme="blue" onClick={() => setAnimateRotate(!animateRotate)}>Trigger Rotate</Button>
          </VStack>
        </Center>
        
        <Center>
          <VStack spacing={10}>
            <MotionSlide in={animateSlide} duration={1} trigger={animateSlide} easing="easeOut">
              <Image src="/next.svg" alt="Next.js logo" boxSize="100%" />
            </MotionSlide>
            <Button colorScheme="blue" onClick={() => setAnimateSlide(!animateSlide)}>Trigger Slide</Button>
          </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionScale 
              duration={500} // 500 milliseconds
              delay={0}
              easing="easeIn"
              trigger={animateScale}
              initialScaleX={0.5}
              initialScaleY={0.5}
              finalScaleX={1}
              finalScaleY={1}
            >
              <Image src="/vercel.svg" alt="Vercel logo" boxSize="100%" />
            </MotionScale>
            <Button colorScheme="blue" onClick={() => setAnimateScale(!animateScale)}>Trigger Scale</Button>
          </VStack>
        </Center>

      </VStack>
    </ChakraProvider>
  );
}