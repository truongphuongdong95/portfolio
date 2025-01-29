"use client";

import clsx from "clsx";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideUpAnimation = ({
  children,
  delay = 0.25,
  duration = 0.75,
  className,
}: {
  children: React.ReactNode;
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

  return (
    <motion.div
      ref={ref}
      className={clsx("relative overflow-hidden", className)}
      variants={{
        hidden: { opacity: 0, transform: "translateY(50%)" },
        visible: { opacity: 1, transform: "translateY(0)" },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
