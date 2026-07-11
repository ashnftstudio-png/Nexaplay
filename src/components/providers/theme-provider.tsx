import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <div data-theme="nexaplay-dark">{children}</div>;
}
