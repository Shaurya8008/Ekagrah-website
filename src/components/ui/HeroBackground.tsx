"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft floating blob 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1, x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" },
          scale: { duration: 2, ease: "easeOut" },
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 25, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl mix-blend-multiply"
      />

      {/* Soft floating blob 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1, x: [0, -40, 30, 0], y: [0, 50, -30, 0] }}
        transition={{
          opacity: { duration: 2.5, ease: "easeOut", delay: 0.2 },
          scale: { duration: 2.5, ease: "easeOut", delay: 0.2 },
          x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          y: { duration: 28, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute top-[20%] -right-[10%] w-[60%] h-[70%] rounded-full bg-gradient-to-bl from-secondary/30 to-transparent blur-3xl mix-blend-multiply"
      />
    </div>
  );
}
