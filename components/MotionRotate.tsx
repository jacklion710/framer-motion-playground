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
  delay?: number;
  easing: string;
  trigger: boolean;
  [prop: string]: any; // for additional props
}

const MotionRotate: React.FC<IMotionComponentProps> = ({
    children,
    animationType,
    duration,
    delay,
    easing,
    trigger,
    ...props
  }) => {

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    exit: { rotate: 0 }
  };

  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial",
    exit: "exit",
    variants: rotateVariants,
    transition: {
      duration,
      delay,
      ease: easing,
    },
    ...props
  };

  return  <ChakraProvider>
            <motion.div {...motionProps}>
              {children}
            </motion.div>
          </ChakraProvider>;
};

export default chakra(MotionRotate);
