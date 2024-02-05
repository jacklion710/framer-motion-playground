import React from 'react';
import { motion } from 'framer-motion';
import { chakra, Box } from '@chakra-ui/react';

interface IMotionPulseProps {
  duration: number;
  delay?: number;
  easing?: string | [number, number, number, number];
  trigger: boolean;
  scaleMin?: number; // Minimum scale during the pulse
  scaleMax?: number; // Maximum scale during the pulse
  children: React.ReactNode;
}

const MotionPulse: React.FC<IMotionPulseProps> = ({
  duration,
  delay = 0,
  easing = "easeInOut",
  trigger,
  scaleMin = 0.95,
  scaleMax = 1.05,
  children
}) => {
  const pulseVariants = {
    initial: {
      scale: 1
    },
    animate: {
      scale: [scaleMin, scaleMax, scaleMin],
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
        variants={pulseVariants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default chakra(MotionPulse);
