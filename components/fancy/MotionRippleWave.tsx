import React from 'react';
import { motion } from 'framer-motion';
import { chakra, ChakraProvider } from '@chakra-ui/react';

/**
 * Interface for props of the MotionRippleWave component.
 *
 * @property children - React node(s) to be animated.
 * @property duration - Duration of the ripple wave effect in milliseconds.
 * @property delay - Delay before the animation starts, in milliseconds. Defaults to 0.
 * @property easing - Easing function to define the animation's pacing.
 * @property trigger - Boolean to control the start of the animation.
 * @property amplitude - Amplitude of the ripple wave, in pixels.
 */
interface IMotionRippleWaveProps {
  children: React.ReactNode;
  duration: number;
  delay?: number;
  easing: string;
  trigger: boolean;
  amplitude?: number;
  [prop: string]: any;
}

const MotionRippleWave: React.FC<IMotionRippleWaveProps> = ({
    children,
    duration,
    delay = 0,
    easing,
    trigger,
    amplitude = 0.1, // amplitude as a fraction of scale
    ...props
  }) => {
    // Function to generate sine wave values for scale
    const generateSineWave = (amplitude: number, points = 10) => {
      const values = [];
      for (let i = 0; i <= points; i++) {
        const scale = 1 + amplitude * Math.sin((i / points) * 2 * Math.PI);
        values.push(scale);
      }
      return values;
    };
  
    const sineWaveScale = generateSineWave(amplitude);
  
    const rippleWaveVariants = {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: sineWaveScale,
        opacity: [1, 0.85, 1],
      },
      rest: { scale: 1, opacity: 1 }
    };
  
    const motionProps = {
      initial: "initial",
      animate: trigger ? "animate" : "rest",
      variants: rippleWaveVariants,
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: easing,
        repeat: Infinity,
        repeatType: "mirror" as const
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

export default chakra(MotionRippleWave);
