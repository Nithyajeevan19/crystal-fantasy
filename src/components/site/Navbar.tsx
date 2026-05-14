import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Specialities", to: "/#specialities" },
  { label: "Collections", to: "/#collections" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-xl backdrop-saturate-150 shadow-soft border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`font-serif text-2xl tracking-tight ${scrolled ? "text-forest" : "text-ivory"}`}>
            Crystal <span className="italic text-gold">Fantasy</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              {l.to === "/" ? (
                <Link
                  to="/"
                  className={`hover-underline text-sm tracking-[0.18em] uppercase font-medium ${
                    scrolled ? "text-forest" : "text-ivory/90"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.to}
                  className={`hover-underline text-sm tracking-[0.18em] uppercase font-medium ${
                    scrolled ? "text-forest" : "text-ivory/90"
                  }`}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-500 ${
            scrolled
              ? "bg-forest text-ivory hover:bg-forest-deep"
              : "bg-ivory/10 text-ivory border border-ivory/30 hover:bg-ivory hover:text-forest"
          }`}
        >
          Visit Store
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 rounded-full ${scrolled ? "text-forest" : "text-ivory"}`}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border/40 px-6 py-6"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                {l.to === "/" ? (
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block text-forest text-sm tracking-[0.18em] uppercase"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="block text-forest text-sm tracking-[0.18em] uppercase"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
