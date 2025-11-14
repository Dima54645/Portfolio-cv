import { type Variants } from "framer-motion";

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1, delay: 0.3 },
  },
};

export const underlineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 1, ease: "easeOut" },
  },
};