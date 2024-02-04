import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface IScaleMotionComponentProps {
  children: React.ReactNode;
  duration: number; // Duration in milliseconds
  delay?: number; // Delay in milliseconds, optional
  easing: string;
  trigger: boolean;
  initialScaleX: number; // Initial scale for X axis
  initialScaleY: number; // Initial scale for Y axis
  finalScaleX: number;   // Final scale for X axis
  finalScaleY: number;   // Final scale for Y axis
  [prop: string]: any;   // for additional props
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

  const scaleVariants = {
    initial: { scaleX: initialScaleX, scaleY: initialScaleY },
    animate: { scaleX: finalScaleX, scaleY: finalScaleY },
    exit: { scaleX: initialScaleX, scaleY: initialScaleY }
  };

  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial",
    exit: "exit",
    variants: scaleVariants,
    transition: {
      duration: duration / 1000, // Convert ms from seconds for Framer Motion
      delay: delay / 1000,       // Convert ms from seconds for Framer Motion
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

export default chakra(MotionScale);
