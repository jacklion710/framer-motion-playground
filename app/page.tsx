"use client"
import React, { useState } from 'react';
import MotionFade from '../components/standard/MotionFade';
import MotionRotate from '../components/standard/MotionRotate';
import MotionScale from '../components/standard/MotionScale';
import MotionSlide from '../components/standard/MotionSlide';
import { 
  Center,
  VStack, 
  Button,
  ChakraProvider,
  Image,
  Box,
  Link
} from '@chakra-ui/react';

export default function Home() {
  const [animateFade, setAnimateFade] = useState(false);
  const [animateRotate, setAnimateRotate] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [animateScale, setAnimateScale] = useState(false);
  
  return (
    <ChakraProvider>
      <Box position="relative" top={5} left={4}>
        <Link href="/AnimMenu">
          <Button colorScheme="blue">Animations Menu</Button>
        </Link>
      </Box>
      <VStack spacing={20} align="stretch" mt={20}>

        <Center>
          <VStack spacing={10}>
            <MotionFade 
              duration={2000} // 2 second
              easing="easeOut" 
              trigger={animateFade}
              initialOpacity={0}
              finalOpacity={.5}
            >
              <Image src="/next.svg" alt="Next.js logo" boxSize="100%" />
            </MotionFade>
            <Button colorScheme="blue" onClick={() => setAnimateFade(!animateFade)}>Trigger Fade</Button>
          </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionRotate 
              duration={1000} // 1 second
              trigger={animateRotate} 
              easing="anticipate"
              initialTurns={180}
              finalTurns={720} // One full rotation
            >
              <Image src="/vercel.svg" alt="Vercel logo" boxSize="100%" />
            </MotionRotate>
            <Button colorScheme="blue" onClick={() => setAnimateRotate(!animateRotate)}>Trigger Rotate</Button>
          </VStack>
        </Center>
        
        <Center>
          <VStack spacing={10}>
            <MotionSlide 
              duration={500} // 0.5 seconds
              trigger={animateSlide} 
              easing="circleOut"
              horizontalSlideInitial={'-100vw'}
              horizontalSlideFinal={0}
              verticalSlideInitial={'-100vh'}
              verticalSlideFinal={0}
            >
              <Image src="/next.svg" alt="Next.js logo" boxSize="100%" />
            </MotionSlide>
            <Button colorScheme="blue" onClick={() => setAnimateSlide(!animateSlide)}>Trigger Slide</Button>
          </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionScale 
              duration={500} // 500 milliseconds
              trigger={animateScale}
              easing="easeIn"
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