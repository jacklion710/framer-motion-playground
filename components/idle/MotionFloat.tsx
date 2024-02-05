import React from 'react';
import { motion } from 'framer-motion';
import { chakra, Box } from '@chakra-ui/react';

interface IMotionFloatProps {
  duration: number;
  delay?: number;
  easing?: string | [number, number, number, number];
  trigger: boolean;
  floatDistance?: number;
  direction?: 'up-down' | 'left-right';
  children: React.ReactNode;
}

const MotionFloat: React.FC<IMotionFloatProps> = ({
  duration,
  delay = 0,
  easing = "easeInOut",
  trigger,
  floatDistance = 10,
  direction = 'up-down',
  children
}) => {
  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
    repeat: Infinity,
    repeatType: "mirror" as const, // Explicitly specifying the repeatType as a constant
  };

  const floatVariants = {
    initial: {
      y: 0,
      x: 0
    },
    animate: direction === 'up-down' ? {
      y: [0, floatDistance, 0, -floatDistance, 0],
      transition
    } : {
      x: [0, floatDistance, 0, -floatDistance, 0],
      transition
    }
  };

  return (
    <Box>
      <motion.div
        initial="initial"
        animate={trigger ? "animate" : "initial"}
        variants={floatVariants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default chakra(MotionFloat);
