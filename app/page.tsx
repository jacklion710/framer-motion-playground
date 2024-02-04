"use client"
import React from 'react';
import MotionFade from '../components/MotionSlide';
import MotionRotate from '../components/MotionSlide';
import MotionScale from '../components/MotionSlide';
import MotionSlide from '../components/MotionSlide';
import { 
  Box, 
  Button,
  ChakraProvider
} from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>

      <MotionFade animationType="fade" duration={1} easing="easeOut">
        <Box p={5} shadow="md" borderWidth="1px">
          <p>Content inside a box</p>
        </Box>
      </MotionFade>

      <MotionRotate animationType="slide" duration={0.5} easing="easeIn">
        <Button colorScheme="blue">Click Me</Button>
      </MotionRotate>
      
      <MotionSlide animationType="fade" duration={1} easing="easeOut">
        <Box p={5} shadow="md" borderWidth="1px">
          <p>Content inside a box</p>
        </Box>
      </MotionSlide>

      <MotionScale animationType="slide" duration={0.5} easing="easeIn">
        <Button colorScheme="blue">Click Me</Button>
      </MotionScale>

    </ChakraProvider>
  );
}
