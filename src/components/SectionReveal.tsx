'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px -80px 0px' });

  const variants: Variants = {
    hidden: { opacity: 0, y, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  },
};
