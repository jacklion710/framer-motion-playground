import React, { 
    useState 
} from 'react';
import MotionFade from '../components/MotionFade';
import MotionRotate from '../components/MotionRotate';
import MotionScale from '../components/MotionScale';
import MotionSlide from '../components/MotionSlide';
import { 
    VStack, 
    ChakraProvider, 
    Heading, 
} from '@chakra-ui/react';

const Fancy = () => {

  return (
    <ChakraProvider>
      <VStack spacing={20} mt={20} align="center" justify="center" height="100vh">

       <Heading>This collection is a work in progress.</Heading>

      </VStack>
    </ChakraProvider>
  );
};

export default Fancy;
