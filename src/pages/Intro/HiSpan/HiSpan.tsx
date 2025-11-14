import { motion } from "framer-motion";

const MotionSpan = motion.create("span");

export const HiSpan = (
  <MotionSpan
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: 1,
      y: 0,
      rotate: [0, 20, -10, 20, 0],
    }}
    transition={{
      opacity: { duration: 0.6, delay: 0.8 },
      y: { duration: 0.6, delay: 0.8 },
      rotate: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.2,
      },
    }}
    style={{
      display: "inline-block",
      transformOrigin: "bottom center",
    }}
  >
    👋
  </MotionSpan>
);
