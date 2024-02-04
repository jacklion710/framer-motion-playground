import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface IFadeMotionComponentProps {
  children: React.ReactNode;
  duration: number;
  delay: number;
  easing: string;
  [prop: string]: any; // for additional props
}

const FadeMotion: React.FC<IFadeMotionComponentProps> = ({
  children,
  duration,
  delay,
  easing,
  ...props
}) => {

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: fadeVariants,
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

export default chakra(FadeMotion);
