import { primaryNavigation } from "@/config/navigation";
import { BrandMark } from "@/components/ui/brand-mark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070a12]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.28)] transition hover:bg-cyan-200">
            Join beta
          </button>
        </div>
      </div>
    </header>
  );
}
