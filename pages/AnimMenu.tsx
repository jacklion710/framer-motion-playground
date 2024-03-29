import { VStack, Button, ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

const AnimMenu = () => {
  return (
    <ChakraProvider>
      <VStack spacing={4} align="center" justify="center" height="100vh">
        <Link href="/" passHref><Button colorScheme="blue">Standard</Button></Link>
        <Link href="/Encapsulated" passHref><Button colorScheme="blue">Encapsulated</Button></Link>
        <Link href="/Fancy" passHref><Button colorScheme="blue">Fancy</Button></Link>
        <Link href="/Idle" passHref><Button colorScheme="blue">Idle</Button></Link>
      </VStack>
    </ChakraProvider>
  );
};

export default AnimMenu;
