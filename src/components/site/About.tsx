import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import store from "@/assets/store.jpg";
import idol from "@/assets/p-idol.jpg";
import flowers from "@/assets/p-flowers.jpg";

const stats = [
  { v: "10K+", l: "Happy Customers" },
  { v: "1000+", l: "Decor Pieces" },
  { v: "25+", l: "Years of Trust" },
  { v: "Daily", l: "New Arrivals" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 bg-sage/40 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[640px]"
        >
          <div className="absolute top-0 left-0 w-[70%] h-[78%] rounded-3xl overflow-hidden shadow-luxe">
            <img src={store} alt="Crystal Fantasy boutique interior" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-luxe border-8 border-ivory">
            <img src={idol} alt="Brass Ganesha" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute top-12 right-4 w-32 h-32 rounded-full overflow-hidden border-8 border-ivory shadow-soft animate-float">
            <img src={flowers} alt="Floral arrangement" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-8 glass px-6 py-4 rounded-2xl">
            <p className="font-serif italic text-forest text-2xl">Since 1998</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Tilak Road · Abids</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl lg:text-6xl font-light text-forest-deep leading-[1.05]">
            Crafting Beauty <span className="italic text-luxe">Since Years</span>
          </h2>
          <div className="divider-gold mt-8 w-24" />
          <p className="mt-8 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Tucked into the heart of Abids, Crystal Fantasy has been Hyderabad's
            trusted address for elegant gifting and timeless decor for over two
            decades. Every piece on our shelves is hand-picked — a quiet
            conversation between traditional artistry and modern sensibility.
          </p>
          <p className="mt-5 text-muted-foreground text-base lg:text-lg leading-relaxed">
            From divine idols and carved temples to crystal sculpture and
            corporate hampers, we curate moments worth remembering and gifts
            worth keeping.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-gold pl-5"
              >
                <p className="font-serif text-4xl lg:text-5xl text-forest-deep">{s.v}</p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
