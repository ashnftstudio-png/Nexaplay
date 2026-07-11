import { sidebarNavigation } from "@/config/navigation";

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-white/[0.03] p-6 xl:block">
      <div className="sticky top-28 space-y-8">
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">Browse</h2>
          <nav className="mt-4 space-y-2" aria-label="Store sections">
            {sidebarNavigation.map((item) => (
              <a key={item.href} href={item.href} className="flex rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/10 hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </section>
        <section className="rounded-3xl border border-violet-300/20 bg-violet-400/10 p-5">
          <p className="text-sm font-bold text-violet-100">Foundation ready</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Architecture is prepared for future store modules, user libraries, and creator tools.</p>
        </section>
      </div>
    </aside>
  );
}
