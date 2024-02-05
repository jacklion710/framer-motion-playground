import React from 'react';
import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionFloatingBubble component.
 *
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the floating bubble effect in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define the animation's pacing.
 * @property trigger - Boolean to control the start of the animation.
 * @property floatDistance - Vertical distance for the floating effect, in pixels.
 */
interface IMotionFloatingBubbleProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  floatDistance?: number;
  [prop: string]: any;
}

const MotionFloatingBubble: React.FC<IMotionFloatingBubbleProps> = ({
    children,
    duration,
    delay = 0,
    easing,
    trigger,
    floatDistance = 30,
    ...props
  }) => {
    const floatVariants = {
      initial: { y: 0, scale: 1, rotate: 0 },
      animate: {
        y: [0, -floatDistance, 0],
        scale: [1, 1.05, 1],
        rotate: [0, 10, -10, 0],
      },
      rest: { y: 0, scale: 1, rotate: 0 } // Added for the resting state
    };
  
    const motionProps = {
      initial: "initial",
      animate: trigger ? "animate" : "rest", // Toggle between animate and rest
      variants: floatVariants,
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: easing,
        repeat: trigger ? Infinity : 0, // Repeat only when triggered
        repeatType: "loop" as const
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

export default chakra(MotionFloatingBubble);
