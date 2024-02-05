import React, { 
    useState 
} from 'react';
import MotionFade from '../components/MotionFade';
import MotionRotate from '../components/MotionRotate';
import MotionScale from '../components/MotionScale';
import MotionSlide from '../components/MotionSlide';
import { 
    Button, 
    VStack, 
    ChakraProvider, 
    Box, 
    Center, 
} from '@chakra-ui/react';

const Encapsulated = () => {
  const [animateCombo, setAnimateCombo] = useState(false);
  const [animateCombo2, setAnimateCombo2] = useState(false);
  const [animateScale, setAnimateScale] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [animateFade, setAnimateFade] = useState(false);
  const [animateRotate, setAnimateRotate] = useState(false);

  return (
    <ChakraProvider>
      <VStack spacing={20} mt={20} align="center" justify="center" height="100vh">
        {/* Combined Animations */}
        <Center>
            <VStack spacing={10}>
                <MotionScale 
                    duration={1000}
                    easing="easeInOut"
                    trigger={animateCombo}
                    initialScaleX={0.5}
                    initialScaleY={0.5}
                    finalScaleX={1}
                    finalScaleY={1}
                >
                    <MotionRotate
                    duration={1000}
                    easing="easeInOut"
                    trigger={animateCombo}
                    initialTurns={0}
                    finalTurns={360}
                    >
                    <Box w="100px" h="100px" bg="red" />
                    </MotionRotate>
                </MotionScale>
                <Button colorScheme="blue" onClick={() => setAnimateCombo(!animateCombo)}>
                    Trigger Combined Animation
                </Button>
            </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionFade
              duration={1000}
              easing="easeInOut"
              trigger={animateCombo2}
              initialOpacity={0}
              finalOpacity={1}
            >
              <MotionSlide
                duration={1000}
                easing="easeInOut"
                trigger={animateCombo2}
                horizontalSlideInitial={'-100vw'}
                horizontalSlideFinal={0}
                verticalSlideInitial={0}
                verticalSlideFinal={0}
              >
                <Box w="100px" h="100px" bg="blue" />
              </MotionSlide>
            </MotionFade>
            <Button colorScheme="blue" onClick={() => setAnimateCombo2(!animateCombo2)}>
              Trigger Another Combined Animation
            </Button>
          </VStack>
        </Center>

        <Center>
          <VStack spacing={10}>
            <MotionScale 
              duration={1000}
              easing="easeInOut"
              trigger={animateScale}
              initialScaleX={0.5}
              initialScaleY={0.5}
              finalScaleX={1}
              finalScaleY={1}
            >
              <MotionSlide 
                duration={1000}
                easing="easeInOut"
                trigger={animateSlide}
                horizontalSlideInitial={'-100vw'}
                horizontalSlideFinal={0}
                verticalSlideInitial={0}
                verticalSlideFinal={0}
              >
                <Box w="100px" h="100px" bg="red" />
              </MotionSlide>
            </MotionScale>
            <Button colorScheme="blue" onClick={() => setAnimateScale(!animateScale)}>
              Trigger Scale
            </Button>
            <Button colorScheme="blue" onClick={() => setAnimateSlide(!animateSlide)}>
              Trigger Slide
            </Button>
          </VStack>
        </Center>

        {/* Second Example: Fade and Rotate */}
        <Center>
          <VStack spacing={10}>
            <MotionFade
              duration={1000}
              easing="easeInOut"
              trigger={animateFade}
              initialOpacity={0}
              finalOpacity={1}
            >
              <MotionRotate
                duration={1000}
                easing="easeInOut"
                trigger={animateRotate}
                initialTurns={0}
                finalTurns={360}
              >
                <Box w="100px" h="100px" bg="blue" />
              </MotionRotate>
            </MotionFade>
            <Button colorScheme="blue" onClick={() => setAnimateFade(!animateFade)}>
              Trigger Fade
            </Button>
            <Button colorScheme="blue" onClick={() => setAnimateRotate(!animateRotate)}>
              Trigger Rotate
            </Button>
          </VStack>
        </Center>

        {/* Additional examples can be similarly structured */}
      </VStack>
    </ChakraProvider>
  );
};

export default Encapsulated;
