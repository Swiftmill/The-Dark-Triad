import { motion } from 'framer-motion';
import glyphs from '../data/glyphs.json';
import { CenterLines } from '../components/CenterLines';
import { GlyphButton } from '../components/GlyphButton';
import { HeroVideo } from '../components/HeroVideo';
import { Lines } from '../components/Lines';
import { TitleGlitch } from '../components/TitleGlitch';

const heroGlyphs = glyphs;

export const Intro = () => {
  return (
    <section id="intro" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <HeroVideo src="/assets/video/hero.mp4" poster="/assets/img/hero-placeholder.jpg" opacity={0.55} />
        <div className="grain" />
        <div className="scanlines" />
      </div>

      <div className="halo left-1/2 top-24 h-64 w-64 -translate-x-1/2 opacity-50" />
      <div className="halo left-[20%] bottom-16 h-48 w-48 opacity-40" />
      <div className="halo right-[18%] top-1/3 h-72 w-72 opacity-40" />

      <CenterLines />
      <Lines />

      <div className="relative z-10 mx-auto flex w-[min(960px,95%)] flex-col items-center text-center">
        <motion.div
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
            <circle cx="24" cy="24" r="22" stroke="rgba(230,196,91,0.6)" strokeWidth="1.5" />
            <path
              d="M24 10L34 30H14L24 10Z"
              fill="rgba(158,107,16,0.25)"
              stroke="rgba(230,196,91,0.9)"
              strokeWidth="1"
            />
            <circle cx="24" cy="22" r="2" fill="rgba(230,196,91,0.9)" />
          </svg>
        </motion.div>

        <TitleGlitch prefix="THE DARK" accent="TRIAD" />
        <motion.p
          className="mt-6 max-w-3xl text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          THE GATE TO FORBIDDEN KNOWLEDGE AND THE HIDDEN CODE OF HUMAN NATURE. ALIGN YOUR MIND WITH
          THE SIGILS BELOW TO UNLOCK EACH CHAMBER.
        </motion.p>

        <motion.div
          className="mt-16 flex w-full flex-wrap items-center justify-center gap-3 border border-white/10 bg-black/40 p-4 backdrop-blur"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
        >
          {heroGlyphs.map((item, index) => (
            <GlyphButton key={item.id} glyphs={item.glyphs} real={item.real} index={index} targetId={item.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
