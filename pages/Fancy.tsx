import React, { 
    useState 
} from 'react';
import MotionFlip from '../components/fancy/MotionFlip';
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
                    <MotionFlip
                        duration={1000}
                        easing="easeInOut"
                        trigger={flipTrigger}
                        flipDirection="horizontal"
                    >
                        <Image src="/next.svg" alt="Next.js logo" boxSize="150px" />
                    </MotionFlip>
                    <Button colorScheme="blue" onClick={() => setFlipTrigger(!flipTrigger)}>
                        Trigger Flip
                    </Button>
                </VStack>
            </Center>

        </VStack>
      </ChakraProvider>
    );
  };
  
  export default Fancy;
  