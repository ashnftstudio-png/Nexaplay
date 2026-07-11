export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070a12]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} NexaPlay. All rights reserved.</p>
        <p className="max-w-2xl">Original dark gaming foundation built with Next.js App Router, React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
