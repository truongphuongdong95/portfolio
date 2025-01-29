"use client";

import clsx from "clsx";
import {
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

const WavyTextAnimation = ({
  text,
  children,
  delay = 0.25,
  duration = 0.25,
  className,
}: {
  text: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string | undefined;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const letters = Array.from(text);

  return (
    <motion.span
      ref={ref}
      className={clsx("relative inline-flex overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WavyTextAnimation;
