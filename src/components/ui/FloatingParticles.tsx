import { Heart, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const icons = [Heart, Sparkles, Star];

export function FloatingParticles({ tone = "warm" }: { tone?: "warm" | "cool" }) {
  const reducedMotion = usePrefersReducedMotion();
  const color = tone === "warm" ? "text-rose-300/55" : "text-cyan-300/45";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => {
        const Icon = icons[index % icons.length];
        const left = `${(index * 37) % 100}%`;
        const top = `${(index * 23) % 100}%`;

        return (
          <motion.div
            key={index}
            className={`absolute ${color}`}
            style={{ left, top }}
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, -18, 0],
                    rotate: [0, 8, -8, 0],
                    opacity: [0.25, 0.75, 0.25],
                  }
            }
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.18,
              ease: "easeInOut",
            }}
          >
            <Icon size={14 + (index % 3) * 5} />
          </motion.div>
        );
      })}
    </div>
  );
}
