import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-forest-deep">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Crystal Fantasy luxury decor — handcrafted brass Ganesha idol with jasmine"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.27_0.05_155/0.85)_100%)]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/70 blur-[1px]"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 min-h-[100svh] flex flex-col justify-center pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-medium">
            Hyderabad's Home of Elegant Gifting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.7, 0, 0.2, 1] }}
          className="font-serif text-ivory text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] font-light max-w-5xl"
        >
          Where Decor Meets{" "}
          <span className="italic text-luxe">Emotion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl text-ivory/75 text-base lg:text-lg leading-relaxed"
        >
          Discover handcrafted gifts, divine idols, artistic decor and timeless
          collectibles — curated for every space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#specialities"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-forest-deep px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold hover:bg-ivory transition-all duration-500 shadow-glow"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#visit"
            className="group inline-flex items-center justify-center gap-3 glass-dark text-ivory px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-semibold hover:bg-ivory/10 transition-all duration-500"
          >
            <MapPin className="w-4 h-4" />
            Visit Store
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-ivory/50 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="relative h-10 w-px bg-ivory/20 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-gold animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}
