import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="NexaPlay home">
      <span className="grid size-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_32px_rgba(34,211,238,0.2)] transition group-hover:border-cyan-200/60">
        <span className="text-lg font-black tracking-tighter text-cyan-100">NX</span>
      </span>
      <span className="hidden sm:block">
        <span className="block text-base font-black uppercase tracking-[0.24em] text-white">NexaPlay</span>
        <span className="block text-xs font-medium text-slate-400">Premium gaming platform</span>
      </span>
    </Link>
  );
}
