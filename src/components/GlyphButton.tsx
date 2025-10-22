import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGlyphCycle } from '../hooks/useGlyphCycle';
import { scrollToSection } from '../utils/scrollToSection';

interface GlyphButtonProps {
  glyphs: string[];
  real: string;
  index: number;
  targetId: string;
}

export const GlyphButton = ({ glyphs, real, index, targetId }: GlyphButtonProps) => {
  const cycleGlyph = useGlyphCycle(glyphs, index * 2);
  const [isRevealed, setIsRevealed] = useState(false);

  const label = `${real.toLowerCase()} section`;

  return (
    <motion.button
      type="button"
      aria-label={label}
      className="glyph-button"
      onHoverStart={() => setIsRevealed(true)}
      onHoverEnd={() => setIsRevealed(false)}
      onFocus={() => setIsRevealed(true)}
      onBlur={() => setIsRevealed(false)}
      onClick={() => scrollToSection(targetId)}
      whileHover={{ y: -4, borderColor: 'rgba(230,196,91,0.6)', color: 'rgba(255,255,255,0.95)' }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="block font-semibold">
        {isRevealed ? real : cycleGlyph}
      </span>
    </motion.button>
  );
};
