import React from 'react';
import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

interface IMotionDisplaceProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  intensity: number;
  [prop: string]: any;
}

const MotionDisplace: React.FC<IMotionDisplaceProps> = ({
  children,
  duration,
  delay = 0,
  easing,
  trigger,
  intensity,
  ...props
}) => {
  const displaceVariants = {
    initial: { 
      clipPath: 'inset(0%)',
    },
    animate: {
      clipPath: ['inset(0%)', `inset(${intensity}% ${intensity}% ${intensity}% ${intensity}%)`, 'inset(0%)'],
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: easing,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const motionProps = {
    initial: "initial",
    animate: trigger ? "animate" : "initial",
    variants: displaceVariants,
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

export default chakra(MotionDisplace);
