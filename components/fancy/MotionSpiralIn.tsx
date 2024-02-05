import React from 'react';
import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionSpiralIn component.
 *
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the spiral in effect in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define the animation's pacing.
 * @property trigger - Boolean to control the start of the animation.
 */
interface IMotionSpiralInProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  [prop: string]: any;
}

const MotionSpiralIn: React.FC<IMotionSpiralInProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  ...props
}) => {
  const spiralInVariants = {
    initial: { scale: 0, rotate: 720, opacity: 0, x: 100, y: 100 },
    animate: { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0 },
  };

  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial",
    variants: spiralInVariants,
    transition: {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: easing,
    },
    ...props
  };

  return (
    <ChakraProvider>
      <motion.div {...motionProps}>
        {children}
      </motion.div>
    </ChakraProvider>
  );
};

export default chakra(MotionSpiralIn);
