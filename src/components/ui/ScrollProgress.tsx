import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-emerald-300 via-fuchsia-400 to-amber-300"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
