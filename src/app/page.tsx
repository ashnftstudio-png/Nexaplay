const foundations = [
  "Next.js 15 App Router",
  "React 19 server-ready UI",
  "Strict TypeScript setup",
  "Tailwind CSS design system",
  "Vercel deployment defaults",
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan-200">NexaPlay foundation</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            A premium gaming platform shell, ready for what comes next.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            NexaPlay starts with a scalable architecture, responsive layout, and original dark visual system designed for future store, library, and community experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#architecture" className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-black text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.3)] transition hover:bg-cyan-200">
              View architecture
            </a>
            <a href="https://vercel.com/new" className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10">
              Deploy-ready
            </a>
          </div>
        </div>
      </section>

      <section id="architecture" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {foundations.map((item) => (
          <article key={item} className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
            <div className="mb-5 size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
            <h2 className="text-xl font-black text-white">{item}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Configured as part of the production foundation without implementing commerce or store features yet.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
