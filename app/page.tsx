import React from 'react';
import MotionComponent from '../components/Motion';
import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <MotionComponent animationType="fade" duration={1} easing="easeOut">
        <Box p={5} shadow="md" borderWidth="1px">
          <p>Content inside a box</p>
        </Box>
      </MotionComponent>

      <MotionComponent animationType="slide" duration={0.5} easing="easeIn">
        <Button colorScheme="blue">Click Me</Button>
      </MotionComponent>

    </main>
  );
}
