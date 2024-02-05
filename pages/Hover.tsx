import React, { 
    useState 
} from 'react';
import MotionFade from '../components/standard/MotionFade';
import MotionRotate from '../components/standard/MotionRotate';
import MotionScale from '../components/standard/MotionScale';
import MotionSlide from '../components/standard/MotionSlide';
import { 
    VStack, 
    ChakraProvider, 
    Heading, 
    Link,
    Button,
    Box
} from '@chakra-ui/react';

const Hover = () => {

  return (
    <ChakraProvider>
      <Box position="relative" top={5} left={4}>
        <Link href="/AnimMenu">
          <Button colorScheme="blue">Animations Menu</Button>
        </Link>
      </Box>
      <VStack spacing={20} mt={20} align="center" justify="center" height="100vh">

       <Heading>This collection is a work in progress.</Heading>

      </VStack>
    </ChakraProvider>
  );
};

export default Hover;
