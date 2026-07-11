import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaPlay | Premium Gaming Platform",
  description: "A production-ready foundation for the NexaPlay gaming platform.",
  metadataBase: new URL("https://nexaplay.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider><AuthProvider><AppShell>{children}</AppShell></AuthProvider></ThemeProvider>
      </body>
    </html>
  );
}
