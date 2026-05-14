import idol from "@/assets/p-idol.jpg";
import flowers from "@/assets/p-flowers.jpg";
import temple from "@/assets/p-temple.jpg";
import wall from "@/assets/p-wall.jpg";
import figurine from "@/assets/p-figurine.jpg";
import clock from "@/assets/p-clock.jpg";
import candle from "@/assets/p-candle.jpg";
import { SectionLabel } from "./SectionLabel";
import { motion } from "framer-motion";
import { useState } from "react";

const c1 = "https://res.cloudinary.com/dqkbvljmo/image/upload/v1778738164/crystal_1_onop1d.jpg";
const c2 = "https://res.cloudinary.com/dqkbvljmo/image/upload/v1778738112/crystal_4_zmgw4c.jpg";
const c3 = "https://res.cloudinary.com/dqkbvljmo/image/upload/v1778738112/crystal_2_uzh4hb.jpg";
const c4 = "https://res.cloudinary.com/dqkbvljmo/image/upload/v1778738344/Screenshot_2026-05-14_112848_jhwghv.png";

const row1 = [
  { img: idol, label: "Brass Ganesha" },
  { img: c1, label: "Crystal Sculpture" },
  { img: flowers, label: "Floral Arrangements" },
  { img: c2, label: "Heritage Crystal" },
  { img: temple, label: "Wooden Temple" },
  { img: clock, label: "Heritage Clock" },
];

const row2 = [
  { img: wall, label: "Gold Wall Art" },
  { img: c3, label: "Crystal Decor" },
  { img: candle, label: "Candle Holders" },
  { img: c4, label: "Signature Piece" },
  { img: figurine, label: "Porcelain Muse" },
];

function Card({ img, label }: { img: string; label: string }) {
  return (
    <div className="group relative shrink-0 w-[280px] lg:w-[340px] aspect-[4/5] mx-3 rounded-2xl overflow-hidden shadow-soft hover:scale-[1.03] transition-transform duration-700">
      <img src={img} alt={label} loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Crystal Fantasy</p>
        <p className="font-serif text-ivory text-xl mt-1">{label}</p>
      </div>
    </div>
  );
}

function Row({ items, reverse, paused }: { items: typeof row1; reverse?: boolean; paused: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((it, i) => (
          <Card key={i} img={it.img} label={it.label} />
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className="relative py-28 lg:py-36 bg-gradient-forest overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.10_80/0.15),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-14 px-6"
      >
        <SectionLabel>A Luxury Decor Exhibition</SectionLabel>
        <h2 className="mt-6 font-serif text-4xl lg:text-6xl font-light text-ivory">
          Crafted with <span className="italic text-luxe">Devotion</span>
        </h2>
      </motion.div>

      <div className="relative space-y-6">
        <Row items={row1} paused={paused} />
        <Row items={row2} reverse paused={paused} />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forest-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest-deep to-transparent" />
    </section>
  );
}
