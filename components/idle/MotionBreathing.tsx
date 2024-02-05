import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

interface IMotionBreathingProps {
  duration?: number; // Duration of one cycle of the animation, in seconds
  intensity?: number; // Intensity of the breathing effect, default is 1.05
  trigger: boolean; // Flag to start/stop the animation
  children: React.ReactNode; // Children elements to which the animation will be applied
}

const MotionBreathing: React.FC<IMotionBreathingProps> = ({
  duration = 2,
  intensity = 0.05, // Default intensity set to 0.05
  trigger,
  children
}) => {
  const scaleMax = 1 + intensity; // Calculating max scale based on intensity
  const breathingAnimation = {
    scale: [1, scaleMax, 1], // Scales between 1 and scaleMax
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  };

  return (
    <Box>
      <motion.div
        animate={trigger ? breathingAnimation : 'initial'}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default MotionBreathing;
