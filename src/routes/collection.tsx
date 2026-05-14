import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { UnderlineTabs } from "@/components/site/UnderlineTabs";
import { SectionLabel } from "@/components/site/SectionLabel";
import { productData, productCategories } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Full Collection — Crystal Fantasy, Hyderabad" },
      {
        name: "description",
        content:
          "Explore every category at Crystal Fantasy — idols, flowers, temples, paintings, wall decor, corporate gifts, crystal, clocks, candles and more.",
      },
      { property: "og:title", content: "Full Collection — Crystal Fantasy" },
      {
        property: "og:description",
        content: "Browse the complete Crystal Fantasy catalogue across every category.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [active, setActive] = useState(productCategories[0]);
  const products = productData[active];

  return (
    <main className="bg-ivory">
      <Navbar />

      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.10_80/0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <SectionLabel>The Full Catalogue</SectionLabel>
          <h1 className="mt-6 font-serif text-5xl lg:text-7xl font-light text-ivory leading-[1.05]">
            Our Complete <span className="italic text-luxe">Collection</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ivory/70 text-base lg:text-lg">
            Every category, every curation — handpicked from the heart of Abids.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <UnderlineTabs categories={productCategories} active={active} onChange={setActive} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {products.map((p, i) => (
                <motion.article
                  key={p.name + i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
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
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-forest-deep text-xs font-semibold tracking-wider">
                      {p.price}
                    </div>
                  </div>
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{active}</p>
                      <h3 className="font-serif text-lg text-forest-deep mt-1">{p.name}</h3>
                    </div>
                    <span className="font-serif text-gold italic">{p.price}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-20 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-forest text-forest px-8 py-4 rounded-full text-xs tracking-[0.3em] uppercase font-semibold hover:bg-forest hover:text-ivory transition-all duration-500"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
