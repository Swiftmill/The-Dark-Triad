import { boardMessages } from '../data/boardMessages';
import { Reveal } from '../components/Reveal';

export const Board = () => (
  <section id="board" className="section">
    <div className="absolute inset-0 -z-10">
      <div className="scanlines h-full w-full opacity-40" />
    </div>
    <div className="mx-auto flex w-[min(1000px,95%)] flex-col gap-10">
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Council Board</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-2xl text-sm uppercase tracking-[0.28em] text-white/60">
          Monitor encrypted broadcasts from the Triad. Only initiates with the proper attunement can
          decrypt the deeper payloads.
        </p>
      </Reveal>
      <div className="space-y-6">
        {boardMessages.map((message, index) => (
          <Reveal key={message.id} delay={0.15 + index * 0.1}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-gold-light/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/40">
                <span>{message.author}</span>
                <span>{message.timestamp}</span>
              </div>
              <h3 className="mt-4 font-display text-xl uppercase tracking-[0.2em] text-white">{message.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60">{message.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
