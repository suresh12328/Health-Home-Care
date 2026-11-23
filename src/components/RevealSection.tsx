import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
}

export function RevealSection({ children, className = '' }: RevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
