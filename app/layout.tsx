import "./globals.css";
import type { ReactNode } from "react";

export const metadata = { title: "Create App Factory App" };

export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="bg-stone-50 text-stone-950">{children}</body></html>;
}
