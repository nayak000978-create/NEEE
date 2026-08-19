import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/neee-logo.png.asset.json";
import { ResultLogin } from "@/components/site/ResultLogin";
import { MockResult } from "@/components/site/MockResult";
import { Footer } from "@/components/site/Footer";

const TITLE = "View Mock Result — NEEE Demonstration Portal";
const DESC =
  "Fictional NEEE mock result demonstration: sign in with demo credentials to view an example NEEE mock score card.";

export const Route = createFileRoute("/result")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/result" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/result" }],
  }),
  component: ResultPage,
});

function ResultPage() {
  const [application, setApplication] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1180px] items-center gap-3 px-3 py-3 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logoAsset.url} alt="NEEE logo" className="h-11 w-auto shrink-0" />
            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-bold text-navy">
                National Engineering Entrance Examination
              </p>
              <p className="text-[12px] text-muted-foreground">
                Fictional educational demonstration project
              </p>
            </div>
          </div>
          <div className="text-[13px] text-muted-foreground md:text-right">
            NEEE 2026 — Mock Session 2
            <br />
            Mock Score: Paper 1 (Engineering)
          </div>
        </div>
      </header>

      <div className="h-9 bg-navy-dark" />

      <main className="flex-1 px-3 py-8 md:py-12">
        {application ? (
          <div className="space-y-6">
            <MockResult applicationNumber={application} />
            <div className="mx-auto max-w-[850px]">
              <button
                type="button"
                onClick={() => setApplication(null)}
                className="border border-border px-4 py-2 text-[13.5px] text-navy transition-colors hover:bg-accent"
              >
                Back to login
              </button>
            </div>
          </div>
        ) : (
          <ResultLogin onSuccess={setApplication} />
        )}
      </main>

      <Footer />
    </div>
  );
}
