"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  once?: boolean;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Smooth, elegant cubic-bezier
    },
  },
};

export function AnimatedText({
  text,
  className,
  el: Wrapper = "p",
  once = true,
}: AnimatedTextProps) {
  return (
    <Wrapper className={cn("inline-block", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((word, wordIndex) => (
          <span className="inline-block" key={`${word}-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
