import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate';

interface IMotionComponentProps {
  children: React.ReactNode;
  animationType: AnimationType;
  duration: number;
  delay: number;
  easing: string;
  [prop: string]: any; // for additional props
}

const MotionComponent: React.FC<IMotionComponentProps> = ({
    children,
    animationType,
    duration,
    delay,
    easing,
    ...props
  }) => {

  const motionVariants: { [key in AnimationType]: any } = {
    fade: { /* ... */ },
    slide: { /* ... */ },
    scale: { /* ... */ },
    rotate: { /* ... */ },
  };

  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: motionVariants[animationType],
    transition: {
      duration,
      delay,
      ease: easing,
    },
    ...props
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default chakra(MotionComponent);
