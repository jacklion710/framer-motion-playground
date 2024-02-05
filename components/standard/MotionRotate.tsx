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
 * - "linear" :: This creates a consistent, steady animation speed from start to finish
 * 
 * - "easeIn" :: The animation starts slowly and accelerates as it progresses. This is good for animations that should feel like they're "building up"
 * 
 * - "easeOut" :: The animation starts quickly and decelerates towards the end. It's useful for animations that should settle into place
 * 
 * - "easeInOut" :: Combines easeIn and easeOut. The animation starts slowly, speeds up, and then slows down towards the end. It's great for animations that should feel smooth and natural
 * 
 * - "circIn" :: Starts the animation slowly and then accelerates more sharply than easeIn
 * 
 * - "circOut" :: Begins quickly and decelerates more sharply, creating a pronounced settling effect
 * 
 * - "circInOut" :: A combination of circIn and circOut, providing a very pronounced acceleration in the middle of the animation
 * 
 * - "backIn" :: The animation starts by pulling back, then accelerates forward, creating a "wind-up" effect
 * 
 * - "backOut" :: The animation moves forward before pulling back slightly at the end, as if overshooting the target and then settling
 * 
 * - "backInOut" :: Combines backIn and backOut, creating both the wind-up effect and the overshoot effect in a single animation
 * 
 * - "anticipate" :: Similar to backIn, but with a more pronounced initial reverse movement, creating a stronger "wind-up" effect
 * 
 * - Custom cubic bezier (e.g., "cubic-bezier(0.47, 0, 0.745, 0.715)") :: Allows for a completely customizable easing curve defined by four control points. The example "cubic-bezier(0.47, 0, 0.745, 0.715)" defines a specific curve which can be visualized using tools like cubic-bezier.com
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
