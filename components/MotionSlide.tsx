import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionSlide component.
 * 
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the animation in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define animation's pacing. See available options below.
 * @property trigger - Boolean to control the start of the animation.
 * @property horizontalSlideInitial - Initial horizontal slide position (in pixels or viewport width, e.g., '100vw').
 * @property horizontalSlideFinal - Final horizontal slide position (in pixels or viewport width, e.g., '0vw').
 * @property verticalSlideInitial - Initial vertical slide position (in pixels or viewport height, e.g., '100vh').
 * @property verticalSlideFinal - Final vertical slide position (in pixels or viewport height, e.g., '0vh').
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
interface ISlideMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  horizontalSlideInitial: string | number;
  horizontalSlideFinal: string | number;
  verticalSlideInitial: string | number;
  verticalSlideFinal: string | number;
  [prop: string]: any;
}

const MotionSlide: React.FC<ISlideMotionComponentProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  horizontalSlideInitial,
  horizontalSlideFinal,
  verticalSlideInitial,
  verticalSlideFinal,
  ...props
}) => {

  // Define the variants for sliding animation.
  const slideVariants = {
    initial: { x: horizontalSlideInitial, y: verticalSlideInitial },
    animate: { x: horizontalSlideFinal, y: verticalSlideFinal },
    exit: { x: horizontalSlideInitial, y: verticalSlideInitial }
  };

  // Setting up motion props for the framer-motion div.
  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial", // Animation is controlled by the 'trigger' prop.
    exit: "exit",
    variants: slideVariants,
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

export default chakra(MotionSlide);
