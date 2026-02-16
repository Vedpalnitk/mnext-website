export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`group ${className}`}>
      <span className="font-display text-[1.7rem] font-bold tracking-tight select-none">
        <span className="text-accent/60">&lt;</span>
        <span className="text-accent">m</span>
        <span className="text-accent/60">&gt;</span>
        <span className="text-white/90">next</span>
      </span>
    </a>
  );
}
