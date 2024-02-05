import { motion } from 'framer-motion';
import { 
  chakra, 
  ChakraProvider 
} from '@chakra-ui/react';

/**
 * Interface for props of the MotionFlip component.
 *
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the flip animation in milliseconds.
 * @property delay - Delay before the flip animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define the animation's pacing.
 * @property trigger - Boolean to control the start of the animation.
 * @property flipDirection - Direction of the flip, either 'horizontal' or 'vertical'.
 * 
 * Flip direction options:
 * - "horizontal" :: The component will flip horizontally (around the Y-axis).
 * - "vertical" :: The component will flip vertically (around the X-axis).
 * - "diagonalLeft" :: The component will flip diagonally left (around a combination of X and Y axes).
 * - "diagonalRight" :: The component will flip diagonally right (around a combination of X and Y axes).
 */
interface IMotionFlipProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  flipDirection: 'horizontal' | 'vertical' | 'diagonalLeft' | 'diagonalRight';
  [prop: string]: any;
}

const MotionFlip: React.FC<IMotionFlipProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  flipDirection,
  ...props
}) => {

  const flipVariants = {
    initial: { rotateY: 0, rotateX: 0 },
    animate: {
      ...(flipDirection === 'horizontal' && { rotateY: 180 }),
      ...(flipDirection === 'vertical' && { rotateX: 180 }),
      ...(flipDirection === 'diagonalLeft' && { rotateY: 180, rotateX: 180 }),
      ...(flipDirection === 'diagonalRight' && { rotateY: -180, rotateX: 180 }),
    },
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
    style: { transformStyle: 'preserve-3d' as const }, 
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

export default chakra(MotionFlip);
