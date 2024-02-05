import React, { 
    useState 
} from 'react';
import MotionDisplace from '../components/glitch/MotionDisplace';
import { 
    VStack, 
    ChakraProvider, 
    Link,
    Button,
    Box,
    Center,
    Image
} from '@chakra-ui/react';

const Glitch = () => {
  const [glitchTrigger, setGlitchTrigger] = useState(false);

  return (
    <ChakraProvider>
      <Box position="relative" top={5} left={4}>
        <Link href="/AnimMenu">
          <Button colorScheme="blue">Animations Menu</Button>
        </Link>
      </Box>
      <VStack spacing={20} mt={20} align="center" justify="center" height="100vh">

        <Center>
            <VStack spacing={10}>
                <MotionDisplace
                    duration={1000}
                    easing="easeInOut"
                    trigger={glitchTrigger}
                    intensity={90}
                >
                    <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                </MotionDisplace>
                <Button colorScheme="blue" onClick={() => setGlitchTrigger(!glitchTrigger)}>
                    Trigger Glitch
                </Button>
            </VStack>
        </Center>
        
      </VStack>
    </ChakraProvider>
  );
};

export default Glitch;
