import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100">
      <Header />
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <main className="min-h-[calc(100vh-5rem)] flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
