import React from 'react';
import { motion } from 'framer-motion';
import { chakra, Box } from '@chakra-ui/react';

interface IMotionSpinProps {
  duration: number;
  delay?: number;
  easing?: string | [number, number, number, number];
  trigger: boolean;
  children: React.ReactNode;
}

const MotionSpin: React.FC<IMotionSpinProps> = ({
  duration,
  delay = 0,
  easing = "linear",
  trigger,
  children
}) => {
  const spinVariants = {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: 360,
      transition: {
        duration: duration,
        delay: delay,
        ease: easing,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <Box>
      <motion.div
        initial="initial"
        animate={trigger ? "animate" : "initial"}
        variants={spinVariants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default chakra(MotionSpin);
