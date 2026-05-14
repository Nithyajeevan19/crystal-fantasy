export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="h-px w-8 bg-gold/60" />
      <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-semibold">
        {children}
      </span>
      <span className="h-px w-8 bg-gold/60" />
    </div>
  );
}
