import { motion, Variants } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

interface RevealProps {
  className?: string;
  delay?: number;
  variants?: Variants;
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  variants = defaultVariants
}: PropsWithChildren<RevealProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
