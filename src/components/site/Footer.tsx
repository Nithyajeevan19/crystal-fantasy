import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ivory border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-3xl text-forest-deep">
            Crystal <span className="italic text-gold">Fantasy</span>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
            Hyderabad's home of elegant gifting, divine idols and timeless
            handcrafted decor — curated since 1998.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="grid place-items-center w-10 h-10 rounded-full bg-sage text-forest hover:bg-forest hover:text-ivory transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="grid place-items-center w-10 h-10 rounded-full bg-sage text-forest hover:bg-forest hover:text-ivory transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919999999999" className="grid place-items-center w-10 h-10 rounded-full bg-sage text-forest hover:bg-forest hover:text-ivory transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Quick Links</p>
          <ul className="mt-5 space-y-3 text-sm text-forest-deep">
            <li><a href="#collections" className="hover-underline">Collections</a></li>
            <li><a href="#specialities" className="hover-underline">Specialities</a></li>
            <li><a href="#about" className="hover-underline">About</a></li>
            <li><a href="#visit" className="hover-underline">Visit Store</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-forest-deep">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>Tilak Road, Abids, Hyderabad — 500001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href="tel:+919999999999" className="hover-underline">+91 99999 99999</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href="mailto:hello@crystalfantasy.in" className="hover-underline">hello@crystalfantasy.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Crystal Fantasy · Tilak Road, Abids</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Crafted with devotion in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
