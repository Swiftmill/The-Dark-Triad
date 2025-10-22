import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import sections from '../data/sections.json';
import { LoginButton } from './LoginButton';
import { scrollToSection } from '../utils/scrollToSection';

interface SectionLink {
  id: string;
  label: string;
}

export const NavBar = () => {
  const [active, setActive] = useState<string>('intro');
  const sectionLinks = sections as SectionLink[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            setActive(entry.target.id);
          });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.25, 0.5, 0.75]
      }
    );

    sectionLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-40 flex justify-center"
    >
      <nav className="mt-6 flex w-[min(900px,95%)] items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-md">
        <span className="font-display text-xs uppercase tracking-[0.4em] text-white/60">THE DARK TRIAD</span>
        <ul className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/50">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={clsx(
                  'transition-colors hover:text-white',
                  active === link.id ? 'text-gold-light' : 'text-white/50'
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <LoginButton />
      </nav>
    </motion.header>
  );
};
