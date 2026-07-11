import { primaryNavigation } from "@/config/navigation";
import { BrandMark } from "@/components/ui/brand-mark";
import { UserMenu } from "@/components/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-white/10 bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <UserMenu />

      </div>
    </header>
  );
}
