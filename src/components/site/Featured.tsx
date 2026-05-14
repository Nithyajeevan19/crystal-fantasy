import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import idol from "@/assets/p-idol.jpg";
import painting from "@/assets/p-painting.jpg";
import corp from "@/assets/p-corporate.jpg";
import wall from "@/assets/p-wall.jpg";
import candle from "@/assets/p-candle.jpg";
import crystal from "@/assets/p-crystal.jpg";

const items = [
  { title: "Divine Collection", subtitle: "Idols & Sacred Art", img: idol, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Royal Rajasthani Art", subtitle: "Paintings & Frames", img: painting, span: "lg:col-span-2" },
  { title: "Corporate Gifting", subtitle: "Curated Hampers", img: corp, span: "lg:col-span-2" },
  { title: "Modern Home Decor", subtitle: "Wall & Accent Pieces", img: wall, span: "lg:col-span-2" },
  { title: "Festive Decor", subtitle: "Diyas & Candles", img: candle, span: "lg:col-span-2" },
  { title: "Crystal Collection", subtitle: "Refined Sculptures", img: crystal, span: "lg:col-span-2" },
];

export function Featured() {
  return (
    <section id="collections" className="py-28 lg:py-40 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <SectionLabel>Curated Worlds</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl lg:text-7xl font-light text-forest-deep leading-[1.05]">
            Featured <span className="italic text-luxe">Collections</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[260px] lg:auto-rows-[280px] gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/40 transition-colors duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase">{it.subtitle}</p>
                <h3 className="mt-2 font-serif text-2xl lg:text-3xl text-ivory">{it.title}</h3>
                <Link
                  to="/collection"
                  className="mt-4 inline-flex items-center gap-2 text-ivory/90 text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:text-gold"
                >
                  Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
