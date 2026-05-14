import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import idol from "@/assets/p-idol.jpg";
import flowers from "@/assets/p-flowers.jpg";
import corp from "@/assets/p-corporate.jpg";
import temple from "@/assets/p-temple.jpg";
import wall from "@/assets/p-wall.jpg";
import painting from "@/assets/p-painting.jpg";
import figurine from "@/assets/p-figurine.jpg";

type Product = { name: string; price: string; image: string };

const data: Record<string, Product[]> = {
  "God Idols": [
    { name: "Royal Brass Ganesha", price: "₹ 8,400", image: idol },
    { name: "Antique Lakshmi Idol", price: "₹ 12,200", image: idol },
    { name: "Krishna with Flute", price: "₹ 6,900", image: idol },
  ],
  "Artificial Flowers": [
    { name: "Peony & Rose Bouquet", price: "₹ 3,200", image: flowers },
    { name: "Crystal Vase Arrangement", price: "₹ 5,800", image: flowers },
    { name: "Ivory Magnolia Set", price: "₹ 4,400", image: flowers },
  ],
  "Corporate Gifts": [
    { name: "Emerald Gift Box", price: "₹ 2,499", image: corp },
    { name: "Curated Festive Hamper", price: "₹ 6,900", image: corp },
    { name: "Signature Boardroom Set", price: "₹ 9,500", image: corp },
  ],
  "Wooden Temples": [
    { name: "Carved Sheesham Mandir", price: "₹ 24,000", image: temple },
    { name: "Heritage Pooja Temple", price: "₹ 32,500", image: temple },
    { name: "Compact Wall Mandir", price: "₹ 14,800", image: temple },
  ],
  "Wall Decor": [
    { name: "Gold Sun Medallion", price: "₹ 7,400", image: wall },
    { name: "Brass Floral Panel", price: "₹ 9,200", image: wall },
    { name: "Heritage Mirror Frame", price: "₹ 11,000", image: wall },
  ],
  Paintings: [
    { name: "Royal Rajasthani Art", price: "₹ 18,000", image: painting },
    { name: "Heritage Court Scene", price: "₹ 22,500", image: painting },
    { name: "Krishna Leela Canvas", price: "₹ 16,800", image: painting },
  ],
  Figurines: [
    { name: "Porcelain Dancer", price: "₹ 8,800", image: figurine },
    { name: "Ivory Ballet Pose", price: "₹ 10,400", image: figurine },
    { name: "Gilded Muse Sculpture", price: "₹ 12,600", image: figurine },
  ],
};

const categories = Object.keys(data);

export function Specialities() {
  const [active, setActive] = useState(categories[0]);

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

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 lg:gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-3 rounded-full text-xs lg:text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                active === c
                  ? "bg-forest text-ivory shadow-soft"
                  : "bg-card text-forest hover:bg-sage border border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data[active].map((p, i) => (
              <motion.article
                key={p.name + i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-luxe transition-all duration-700"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full glass text-forest-deep hover:text-gold transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Floating price */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-forest-deep text-xs font-semibold tracking-wider">
                    {p.price}
                  </div>

                  {/* View details */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full inline-flex items-center justify-center gap-2 glass-dark text-ivory py-3 rounded-full text-[11px] tracking-[0.25em] uppercase font-semibold">
                      View Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="px-6 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{active}</p>
                    <h3 className="font-serif text-xl text-forest-deep mt-1">{p.name}</h3>
                  </div>
                  <span className="font-serif text-gold text-lg italic">{p.price}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
