import type { ReactNode } from "react";
import { UtilityBar } from "./UtilityBar";
import { MainBrandHeader } from "./MainBrandHeader";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <UtilityBar />
      <MainBrandHeader />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
