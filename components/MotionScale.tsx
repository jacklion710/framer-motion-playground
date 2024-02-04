import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface IScaleMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay: number;
  easing: string;
  [prop: string]: any; // for additional props
}

const ScaleMotion: React.FC<IScaleMotionComponentProps> = ({
  children,
  duration,
  delay,
  easing,
  ...props
}) => {

  const scaleVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 }
  };

  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: scaleVariants,
    transition: {
      duration,
      delay,
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

export default chakra(ScaleMotion);
