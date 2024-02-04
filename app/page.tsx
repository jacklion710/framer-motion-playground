"use client"
import React from 'react';
import Motion from '../components/Motion';
import { 
  Box, 
  Button,
  ChakraProvider
} from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Motion animationType="fade" duration={1} easing="easeOut">
        <Box p={5} shadow="md" borderWidth="1px">
          <p>Content inside a box</p>
        </Box>
      </Motion>

      <Motion animationType="slide" duration={0.5} easing="easeIn">
        <Button colorScheme="blue">Click Me</Button>
      </Motion>

    </ChakraProvider>
  );
}
