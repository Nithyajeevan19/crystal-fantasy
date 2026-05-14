import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { UnderlineTabs } from "./UnderlineTabs";
import { productData, productCategories } from "@/lib/products";

export function Specialities() {
  const [active, setActive] = useState(productCategories[0]);
  const visible = productData[active].slice(0, 3);

  return (
    <section id="specialities" className="relative py-28 lg:py-40 bg-ivory overflow-hidden">
      <div className="absolute inset-0 noise opacity-60" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sage/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <SectionLabel>Heart of Hyderabad Decor</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl lg:text-7xl font-light text-forest-deep leading-[1.05]">
            Our <span className="italic text-luxe">Specialities</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            Curated treasures for every corner of your home.
          </p>
        </motion.div>

        {/* Underline tabs */}
        <div className="mt-14">
          <UnderlineTabs categories={productCategories} active={active} onChange={setActive} />
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visible.map((p, i) => (
              <motion.div
                key={p.name + i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Link
                  to="/collection"
                  className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-luxe transition-all duration-700 block cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-forest-deep text-xs font-semibold tracking-wider">
                      {p.price}
                    </div>
                  </div>
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{active}</p>
                      <h3 className="font-serif text-xl text-forest-deep mt-1">{p.name}</h3>
                    </div>
                    <span className="font-serif text-gold text-lg italic">{p.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex justify-center">
          <Link
            to="/collection"
            className="group inline-flex items-center gap-3 bg-forest text-ivory px-9 py-4 rounded-full text-xs tracking-[0.3em] uppercase font-semibold hover:bg-forest-deep transition-all duration-500 shadow-soft"
          >
            View Full Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
