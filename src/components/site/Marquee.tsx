import idol from "@/assets/p-idol.jpg";
import flowers from "@/assets/p-flowers.jpg";
import corp from "@/assets/p-corporate.jpg";
import temple from "@/assets/p-temple.jpg";
import wall from "@/assets/p-wall.jpg";
import painting from "@/assets/p-painting.jpg";
import figurine from "@/assets/p-figurine.jpg";
import crystal from "@/assets/p-crystal.jpg";
import clock from "@/assets/p-clock.jpg";
import candle from "@/assets/p-candle.jpg";
import { SectionLabel } from "./SectionLabel";
import { motion } from "framer-motion";

const row1 = [
  { img: idol, label: "Brass Ganesha" },
  { img: flowers, label: "Floral Arrangements" },
  { img: crystal, label: "Crystal Decor" },
  { img: temple, label: "Wooden Temple" },
  { img: clock, label: "Heritage Clock" },
];

const row2 = [
  { img: wall, label: "Gold Wall Art" },
  { img: candle, label: "Candle Holders" },
  { img: figurine, label: "Porcelain Muse" },
  { img: painting, label: "Royal Painting" },
  { img: corp, label: "Gifting Hamper" },
];

function Card({ img, label }: { img: string; label: string }) {
  return (
    <div className="group relative shrink-0 w-[280px] lg:w-[340px] aspect-[4/5] mx-3 rounded-2xl overflow-hidden shadow-soft hover:scale-[1.03] transition-transform duration-700">
      <img src={img} alt={label} loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-ivory/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Crystal Fantasy</p>
        <p className="font-serif text-ivory text-xl mt-1">{label}</p>
      </div>
    </div>
  );
}

function Row({ items, reverse }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {doubled.map((it, i) => (
          <Card key={i} img={it.img} label={it.label} />
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="relative py-28 lg:py-36 bg-gradient-forest overflow-hidden">
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
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forest-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest-deep to-transparent" />
    </section>
  );
}
