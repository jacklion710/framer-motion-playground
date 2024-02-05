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
