import { FormEvent, useEffect, useRef, useState } from 'react';
import { Reveal } from '../components/Reveal';

export const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef<number>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }
    toastTimer.current = window.setTimeout(() => setShowToast(false), 3000);
    (event.currentTarget as HTMLFormElement).reset();
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="section">
      <div className="absolute inset-0 -z-10">
        <div className="scanlines h-full w-full opacity-50" />
      </div>
      <div className="mx-auto flex w-[min(900px,95%)] flex-col gap-8">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Summon the Triad</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">
            Submit your coordinates and intent. The council will respond through the encoded channel.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60">
              Name
              <input
                required
                name="name"
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-gold-light focus:outline-none"
                placeholder="Cipher Name"
              />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60">
              Email
              <input
                required
                type="email"
                name="email"
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-gold-light focus:outline-none"
                placeholder="link@sigil.net"
              />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60">
              Message
              <textarea
                required
                name="message"
                rows={4}
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-gold-light focus:outline-none"
                placeholder="State your offering"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-gold-light/40 bg-gold-light/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-gold-light transition hover:bg-gold-light/30"
            >
              Transmit
            </button>
          </form>
        </Reveal>
      </div>

      {showToast ? (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold-light/50 bg-black/80 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold-light shadow-lg">
          Signal dispatched to the council
        </div>
      ) : null}
    </section>
  );
};
