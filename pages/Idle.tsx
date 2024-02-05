import React from 'react';
import MotionBreathing from '../components/idle/MotionBreathing';
import MotionFloat from '../components/idle/MotionFloat';
import MotionPulse from '../components/idle/MotionPulse';
import MotionSpin from '../components/idle/MotionSpin';

import { 
    VStack, 
    ChakraProvider, 
    Image, 
    Link,
    Button,
    Box,
    Center
} from '@chakra-ui/react';

const Idle = () => {
  return (
    <ChakraProvider>
      <Box position="relative" top={5} left={4}>
        <Link href="/AnimMenu">
          <Button colorScheme="blue">Animations Menu</Button>
        </Link>
      </Box>
      <VStack spacing={20} align="center" justify="center" height="100vh">
        <Center>
            <VStack spacing={10}>
                <MotionBreathing
                    duration={2}
                    trigger={true}
                    intensity={.4}
                >
                    <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                </MotionBreathing>

                <MotionFloat
                    duration={2}
                    easing="easeInOut"
                    trigger={true}
                    floatDistance={20}
                    direction="up-down"
                >
                    <Image src="/vercel.svg" alt="Vercel logo" boxSize="150px" />
                </MotionFloat>

                <MotionPulse
                    duration={1}
                    easing="easeInOut"
                    trigger={true}
                    scaleMin={0.9}
                    scaleMax={1.1}
                >
                    <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                </MotionPulse>

                <MotionSpin
                    duration={10}
                    easing="linear"
                    trigger={true}
                >
                    <Image src="/vercel.svg" alt="Vercel logo" boxSize="150px" />
                </MotionSpin>
            </VStack>
        </Center>
      </VStack>
    </ChakraProvider>
  );
};

export default Idle;
