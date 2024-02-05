import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface IMotionFlipProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  flipDirection: 'horizontal' | 'vertical';
}

const MotionFlip: React.FC<IMotionFlipProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  flipDirection,
}) => {

  const flipVariants = {
    initial: { rotateY: 0, rotateX: 0 },
    animate: flipDirection === 'horizontal' ? { rotateY: 180 } : { rotateX: 180 },
  };

  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial",
    variants: flipVariants,
    transition: {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: easing,
    },
    style: { transformStyle: 'preserve-3d' as const }, // Updated line
  };

  return (
    <ChakraProvider>
      <motion.div {...motionProps}>
        {children}
      </motion.div>
    </ChakraProvider>
  );
};

export default chakra(MotionFlip);
