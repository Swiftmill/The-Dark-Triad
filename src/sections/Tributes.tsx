import { useEffect, useState } from 'react';
import { tributes } from '../data/tributes';
import { Reveal } from '../components/Reveal';

export const Tributes = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeTribute = tributes.find((item) => item.id === activeId);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="tributes" className="section">
      <div className="absolute inset-0 -z-10">
        <div className="scanlines h-full w-full opacity-50" />
      </div>
      <div className="mx-auto flex w-[min(1100px,95%)] flex-col gap-10">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Tributes</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-sm uppercase tracking-[0.28em] text-white/60">
            Offerings archived for the Triad. Select a tribute to illuminate its origin file. Replace the
            placeholders with your sanctioned media.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {tributes.map((item, index) => (
            <Reveal key={item.id} delay={0.15 + index * 0.08}>
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group relative h-56 overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-xl transition hover:-translate-y-2 hover:border-gold-light/40"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/70 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Load {item.type}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-gold-light/70">{item.type}</span>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-white">{item.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeTribute ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveId(null);
            }
          }}
        >
          <div className="relative w-[min(720px,95%)] rounded-3xl border border-white/10 bg-black/90 p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-gold-light"
            >
              Close
            </button>
            <div className="mt-6 grid gap-6 md:grid-cols-[2fr,1fr]">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                  {activeTribute.placeholder}
                </span>
              </div>
              <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <div>
                  <h3 className="font-display text-base uppercase tracking-[0.25em] text-white">
                    {activeTribute.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/50">
                    {activeTribute.description}
                  </p>
                </div>
                <p className="text-[10px] text-white/30">
                  Replace the placeholder path with your media file to surface the authentic tribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
