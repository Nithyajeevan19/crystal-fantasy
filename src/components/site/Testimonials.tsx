import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    q: "Every piece I've brought home from Crystal Fantasy feels like an heirloom. Their curation is unmatched in Hyderabad.",
    a: "Anjali Reddy",
    r: "Interior Designer",
  },
  {
    q: "We've sourced corporate gifts from them for five years. Effortlessly elegant, always on time, never a complaint.",
    a: "Vikram Mehta",
    r: "CEO, Stride Ventures",
  },
  {
    q: "From divine idols to wedding gifts, the family treats every order like art. This is the soul of Abids.",
    a: "Priya Sharma",
    r: "Long-time Patron",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 lg:py-40 bg-gradient-forest overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.10_80/0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <SectionLabel>Voices of Trust</SectionLabel>
        <h2 className="mt-6 font-serif text-5xl lg:text-6xl font-light text-ivory leading-tight">
          Loved by <span className="italic text-luxe">Hyderabad</span>
        </h2>

        <div className="mt-16 relative h-[280px] lg:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <div className="glass-dark rounded-3xl p-10 lg:p-14 shadow-glow max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-gold mx-auto mb-6" />
                <p className="font-serif italic text-ivory text-xl lg:text-2xl leading-relaxed">
                  "{items[i].q}"
                </p>
                <div className="mt-8">
                  <p className="text-gold text-sm tracking-[0.2em] uppercase font-semibold">{items[i].a}</p>
                  <p className="text-ivory/60 text-xs mt-1 italic">{items[i].r}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-gold" : "w-4 bg-ivory/30"}`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
