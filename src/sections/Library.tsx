import { libraryItems } from '../data/libraryItems';
import { Reveal } from '../components/Reveal';

export const Library = () => {
  return (
    <section id="library" className="section">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="scanlines h-full w-full" />
      </div>
      <div className="mx-auto flex w-[min(1100px,95%)] flex-col gap-12">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Library of Motives</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-3xl text-sm uppercase tracking-[0.28em] text-white/60">
            Browse encrypted treatises curated by the council. Each codex tracks behavioral anomalies and
            decrypts the psychology of power.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {libraryItems.map((item, index) => (
            <Reveal key={item.id} delay={0.15 + index * 0.1}>
              <div className="group perspective-[1200px]">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-[-2deg]">
                  <div className="absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-gold-light/40" />
                  <span className="text-xs uppercase tracking-[0.4em] text-gold-light/80">{`#${index + 1}`}</span>
                  <h3 className="mt-6 font-display text-xl uppercase tracking-[0.2em] text-white">{item.title}</h3>
                  <p className="mt-4 text-xs leading-relaxed text-white/60">{item.description}</p>
                  <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/40">
                    <span>entries</span>
                    <span className="text-gold-light">{item.entries.toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
