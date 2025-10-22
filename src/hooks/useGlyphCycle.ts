import { useEffect, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const getShouldReduceMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

export const useGlyphCycle = (glyphs: string[], seed: number) => {
  const [index, setIndex] = useState(seed % Math.max(glyphs.length, 1));
  const [shouldReduceMotion, setShouldReduceMotion] = useState(getShouldReduceMotion);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!glyphs.length || shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % glyphs.length);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [glyphs, shouldReduceMotion]);

  useEffect(() => {
    if (!glyphs.length) {
      return;
    }

    setIndex(seed % glyphs.length);
  }, [glyphs, seed]);

  return glyphs.length ? glyphs[index] : '';
};
