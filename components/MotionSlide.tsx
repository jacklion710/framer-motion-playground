import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface ISlideMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay: number;
  easing: string;
  [prop: string]: any; // for additional props
}

const SlideMotion: React.FC<ISlideMotionComponentProps> = ({
  children,
  duration,
  delay,
  easing,
  ...props
}) => {

  const slideVariants = {
    initial: { x: '-100vw' },
    animate: { x: 0 },
    exit: { x: '100vw' }
  };

  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: slideVariants,
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

export default chakra(SlideMotion);
