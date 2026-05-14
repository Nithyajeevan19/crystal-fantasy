import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 lg:py-44 bg-forest-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.74_0.10_80/0.15),transparent_50%)]" />
      <div className="absolute inset-0 noise opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center"
      >
        <span className="inline-block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold">
          The Final Note
        </span>
        <h2 className="mt-6 font-serif text-5xl lg:text-7xl xl:text-8xl font-light text-ivory leading-[1.02]">
          Bring Home <br />
          <span className="italic text-luxe">Timeless Elegance</span>
        </h2>
        <p className="mt-8 text-ivory/70 text-base lg:text-lg max-w-xl mx-auto">
          Explore Hyderabad's most loved destination for decor, gifting and
          artistic treasures.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#specialities"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-forest-deep px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold hover:bg-ivory transition-all duration-500 shadow-glow"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center gap-3 border border-ivory/30 text-ivory px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold hover:bg-ivory hover:text-forest-deep transition-all duration-500"
          >
            <MapPin className="w-4 h-4" />
            Visit Store Today
          </a>
        </div>
      </motion.div>
    </section>
  );
}
