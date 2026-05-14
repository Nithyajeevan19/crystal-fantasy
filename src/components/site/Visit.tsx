import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function Visit() {
  return (
    <section id="visit" className="relative py-28 lg:py-40 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl lg:text-7xl font-light text-forest-deep leading-[1.05]">
            Visit Crystal Fantasy <br />
            in the heart of <span className="italic text-luxe">Abids</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-luxe min-h-[500px] relative"
          >
            <iframe
              title="Crystal Fantasy Store Location"
              src="https://www.google.com/maps?q=Tilak+Road+Abids+Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 500 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Floating store card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-2 relative"
          >
            <div className="bg-card rounded-3xl shadow-luxe p-8 lg:p-10 h-full flex flex-col">
              <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold">Crystal Fantasy</p>
              <h3 className="mt-3 font-serif text-3xl lg:text-4xl text-forest-deep">
                Boutique of <span className="italic text-luxe">Elegance</span>
              </h3>
              <div className="divider-gold mt-6 w-20" />

              <div className="mt-6 space-y-5 flex-1">
                <div className="flex gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-sage text-forest shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Address</p>
                    <p className="text-forest-deep mt-1 leading-relaxed">
                      Shop No. 4-1-884, 885, 886,<br />
                      Tilak Road, Abids,<br />
                      Hyderabad — 500001
                    </p>
                    <p className="text-[11px] text-muted-foreground italic mt-2">Opposite Abids Function Hall</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-sage text-forest shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Timings</p>
                    <p className="text-forest-deep mt-1">11:00 AM — 8:30 PM</p>
                    <p className="text-[11px] text-gold italic mt-1">Open All Days</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://www.google.com/maps?q=Tilak+Road+Abids+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-forest text-ivory rounded-full py-3 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-forest-deep transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" /> Directions
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-forest-deep rounded-full py-3 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-gold-soft transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-forest text-forest rounded-full py-3 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-forest hover:text-ivory transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
