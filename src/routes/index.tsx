import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Specialities } from "@/components/site/Specialities";
import { Marquee } from "@/components/site/Marquee";
import { Featured } from "@/components/site/Featured";
import { About } from "@/components/site/About";
import { Visit } from "@/components/site/Visit";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crystal Fantasy — Luxury Gifts & Decor in Abids, Hyderabad" },
      {
        name: "description",
        content:
          "Crystal Fantasy in Abids, Hyderabad — handcrafted idols, artificial flowers, wooden temples, paintings, corporate gifts and timeless home decor.",
      },
      { property: "og:title", content: "Crystal Fantasy — Luxury Gifts & Decor, Hyderabad" },
      {
        property: "og:description",
        content: "Hyderabad's home of elegant gifting and timeless decor on Tilak Road, Abids.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <Hero />
      <Specialities />
      <Marquee />
      <Featured />
      <About />
      <Visit />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
