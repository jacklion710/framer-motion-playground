import { motion } from 'framer-motion';
import { 
  chakra, 
  ChakraProvider 
} from '@chakra-ui/react';

type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate';

interface IMotionComponentProps {
  children: React.ReactNode;
  animationType: AnimationType;
  duration: number;
  delay: number;
  easing: string;
  [prop: string]: any; // for additional props
}

const Motion: React.FC<IMotionComponentProps> = ({
    children,
    animationType,
    duration,
    delay,
    easing,
    ...props
  }) => {

  const motionVariants: { [key in AnimationType]: any } = {
    fade: { /* ... */ },
    slide: { /* ... */ },
    scale: { /* ... */ },
    rotate: { /* ... */ },
  };

  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: motionVariants[animationType],
    transition: {
      duration,
      delay,
      ease: easing,
    },
    ...props
  };

  return <ChakraProvider><motion.div {...motionProps}>{children}</motion.div></ChakraProvider>;
};

export default chakra(Motion);
