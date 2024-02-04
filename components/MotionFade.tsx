import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionFade component.
 * 
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the animation in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define animation's pacing. See available options below.
 * @property trigger - Boolean to control the start of the animation.
 * @property initialOpacity - Initial opacity value (0 to 1).
 * @property finalOpacity - Final opacity value (0 to 1).
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
interface IFadeMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  initialOpacity: number;
  finalOpacity: number;
  [prop: string]: any;
}

const MotionFade: React.FC<IFadeMotionComponentProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  initialOpacity,
  finalOpacity,
  ...props
}) => {

  // Define the variants for fading animation.
  const fadeVariants = {
    initial: { opacity: initialOpacity },
    animate: { opacity: finalOpacity },
    exit: { opacity: initialOpacity }
  };

  // Setting up motion props for the framer-motion div.
  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial", // Animation is controlled by the 'trigger' prop.
    exit: "exit",
    variants: fadeVariants,
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

export default chakra(MotionFade);
