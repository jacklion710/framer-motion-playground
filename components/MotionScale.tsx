import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionScale component.
 * 
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the animation in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define animation's pacing. See available options below.
 * @property trigger - Boolean to control the start of the animation.
 * @property initialScaleX - Initial scale factor along the X-axis.
 * @property initialScaleY - Initial scale factor along the Y-axis.
 * @property finalScaleX - Final scale factor along the X-axis.
 * @property finalScaleY - Final scale factor along the Y-axis.
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
interface IScaleMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  initialScaleX: number;
  initialScaleY: number;
  finalScaleX: number;
  finalScaleY: number;
  [prop: string]: any;
}

const MotionScale: React.FC<IScaleMotionComponentProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  initialScaleX,
  initialScaleY,
  finalScaleX,
  finalScaleY,
  ...props
}) => {

  // Define the variants for scaling animation.
  const scaleVariants = {
    initial: { scaleX: initialScaleX, scaleY: initialScaleY },
    animate: { scaleX: finalScaleX, scaleY: finalScaleY },
    exit: { scaleX: initialScaleX, scaleY: initialScaleY }
  };

  // Setting up motion props for the framer-motion div.
  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial", // Animation is controlled by the 'trigger' prop.
    exit: "exit",
    variants: scaleVariants,
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

export default chakra(MotionScale);
