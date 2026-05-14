import { useEffect, useRef } from "react";

type Props = {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
  variant?: "light" | "dark";
};

export function UnderlineTabs({ categories, active, onChange, variant = "light" }: Props) {
  const inactive = variant === "dark" ? "text-ivory/60 hover:text-ivory" : "text-forest-deep/60 hover:text-forest-deep";
  const activeColor = "text-gold";
  const baseLine = variant === "dark" ? "bg-ivory/15" : "bg-forest-deep/10";

  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scroll the active tab into view whenever it changes
  useEffect(() => {
    const btn = buttonRefs.current[active];
    const container = scrollRef.current;
    if (btn && container) {
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollTo = btnLeft - containerWidth / 2 + btnWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="inline-flex min-w-full items-center justify-center gap-8 lg:gap-14 px-2">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                ref={(el) => { buttonRefs.current[c] = el; }}
                onClick={() => onChange(c)}
                className={`relative whitespace-nowrap pb-3 text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? activeColor : inactive
                }`}
              >
                {c}
                <span
                  className={`absolute left-0 right-0 -bottom-px h-[2px] origin-center rounded-full transition-transform duration-500 ease-out bg-gold ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className={`h-px w-full ${baseLine}`} />
    </div>
  );
}
