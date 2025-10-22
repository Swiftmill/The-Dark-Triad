import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TitleGlitchProps {
  prefix?: string;
  accent: string;
  suffix?: string;
  className?: string;
}

const glitchVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

export const TitleGlitch = ({ prefix, accent, suffix, className }: TitleGlitchProps) => {
  return (
    <motion.h1
      variants={glitchVariants}
      initial="initial"
      animate="animate"
      className={clsx(
        'relative font-display text-5xl uppercase tracking-[0.35em] text-white md:text-6xl',
        'glow-text',
        className
      )}
    >
      <span className="relative inline-block">
        {prefix ? prefix.trim() : ''}
        {prefix ? '\u00A0' : ''}
      </span>
      <span className="relative inline-block bg-triad-gradient bg-clip-text text-transparent">
        {accent}
        <motion.span
          aria-hidden
          className="absolute inset-0 -z-10 bg-triad-gradient opacity-40 blur-sm"
          initial={{ x: 0 }}
          animate={{ x: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 2.8, ease: 'easeInOut' }}
        />
      </span>
      {suffix ? (
        <span className="relative inline-block">
          {'\u00A0'}
          {suffix.trim()}
        </span>
      ) : null}
    </motion.h1>
  );
};
