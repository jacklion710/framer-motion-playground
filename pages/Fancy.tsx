import React, { 
    useState 
} from 'react';
import MotionFlip from '../components/fancy/MotionFlip';
import MotionSpiralIn from '../components/fancy/MotionSpiralIn';
import MotionFloatingBubble from '../components/fancy/MotionFloatingBubble';
import MotionRippleWave from '../components/fancy/MotionRippleWave';
import MotionDisplace from '../components/fancy/MotionDisplace';
import { 
    VStack, 
    ChakraProvider, 
    Link,
    Button,
    Box,
    Image,
    Center
} from '@chakra-ui/react';

const Fancy = () => {
    const [flipTrigger, setFlipTrigger] = useState(false);
    const [zoomFadeTrigger, setZoomFadeTrigger] = useState(false);
    const [floatingBubbleTrigger, setFloatingBubbleTrigger] = useState(false);
    const [rippleWaveTrigger, setRippleWaveTrigger] = useState(false);
    const [displaceTrigger, setDisplaceTrigger] = useState(false);

    return (
      <ChakraProvider>
        <Box position="relative" top={5} left={4}>
          <Link href="/AnimMenu">
            <Button colorScheme="blue">Animations Menu</Button>
          </Link>
        </Box>
        <VStack spacing={5} mt={5} align="center" justify="center" height="100vh">

            <Center>
                <VStack spacing={10}>
                    <MotionFlip
                        duration={1000}
                        easing="easeInOut"
                        trigger={flipTrigger}
                        flipDirection="diagonalLeft"
                    >
                        <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionFlip>
                    <Button colorScheme="blue" onClick={() => setFlipTrigger(!flipTrigger)}>
                        Trigger Flip
                    </Button>
                </VStack>
            </Center>

            <Center>
                <VStack spacing={10}>
                    <MotionSpiralIn 
                        duration={500} 
                        easing="easeInOut"
                        trigger={zoomFadeTrigger}
                        initialScale={0.5} // Initial scale
                        finalScale={1} // Final scale
                        initialOpacity={0} // Initial opacity
                        finalOpacity={1} // Final opacity
                    >
                    <Image src="/vercel.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionSpiralIn>
                    <Button colorScheme="blue" onClick={() => setZoomFadeTrigger(!zoomFadeTrigger)}>
                    Trigger Spiral In
                    </Button>
                </VStack>
            </Center>

            <Center>
                <VStack spacing={10}>
                    <MotionFloatingBubble
                        duration={1000}
                        easing="easeInOut"
                        trigger={floatingBubbleTrigger}
                        floatDistance={100}
                    >
                        <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionFloatingBubble>
                    <Button colorScheme="blue" onClick={() => setFloatingBubbleTrigger(!floatingBubbleTrigger)}>
                        Trigger Floating Bubble
                    </Button>
                </VStack>
            </Center>

            <Center>
                <VStack spacing={10}>
                    <MotionRippleWave 
                    duration={500}
                    easing="easeInOut"
                    trigger={rippleWaveTrigger}
                    amplitude={.5}
                    >
                    <Image src="/vercel.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionRippleWave>
                    <Button colorScheme="blue" onClick={() => setRippleWaveTrigger(!rippleWaveTrigger)}>
                    Trigger Ripple Wave
                    </Button>
                </VStack>
            </Center>

            <Center>
                <VStack spacing={10}>
                    <MotionDisplace
                        duration={1000}
                        easing="easeInOut"
                        trigger={displaceTrigger}
                        intensity={90}
                    >
                        <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionDisplace>
                    <Button colorScheme="blue" onClick={() => setDisplaceTrigger(!displaceTrigger)}>
                        Trigger Displace
                    </Button>
                </VStack>
            </Center>

        </VStack>
      </ChakraProvider>
    );
  };
  
  export default Fancy;
  