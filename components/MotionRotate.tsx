import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionRotate component.
 * 
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the animation in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define animation's pacing. See available options below.
 * @property trigger - Boolean to control the start of the animation.
 * @property initialTurns - Initial rotation state in degrees (e.g., 0 for no rotation).
 * @property finalTurns - Final rotation state in degrees (e.g., 360 for one full rotation).
 * 
 * Easing options (as string): 
 * - "linear"
 * - "easeIn"
 * - "easeOut"
 * - "easeInOut"
 * - "circIn"
 * - "circOut"
 * - "circInOut"
 * - "backIn"
 * - "backOut"
 * - "backInOut"
 * - "anticipate"
 * - Custom cubic bezier (e.g., "cubic-bezier(0.47, 0, 0.745, 0.715)")
 * 
 * For more easing options and details, refer to Framer Motion's documentation.
 */
interface IMotionRotateProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  initialTurns: number;
  finalTurns: number;
  [prop: string]: any;
}

const MotionRotate: React.FC<IMotionRotateProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  initialTurns,
  finalTurns,
  ...props
}) => {

  // Define the variants for rotation animation.
  const rotateVariants = {
    initial: { rotate: initialTurns },
    animate: { rotate: finalTurns },
    exit: { rotate: initialTurns }
  };

  // Setting up motion props for the framer-motion div.
  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial", // Animation is controlled by the 'trigger' prop.
    exit: "exit",
    variants: rotateVariants,
    transition: {
      duration: duration / 1000, // Convert duration from ms to s for Framer Motion.
      delay: delay / 1000,       // Convert delay from ms to s for Framer Motion.
      ease: easing,
    },
    ...props
  };

  // Render the motion component with provided children and props.
  return (
    <ChakraProvider>
      <motion.div {...motionProps}>
        {children}
      </motion.div>
    </ChakraProvider>
  );
};

export default chakra(MotionRotate);
