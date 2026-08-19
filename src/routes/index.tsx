import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import { NoticePanel } from "@/components/site/NoticePanel";
import { Introduction } from "@/components/site/Introduction";
import { CandidateActivity } from "@/components/site/CandidateActivity";

const TITLE = "NEEE — National Engineering Entrance Examination";
const DESC =
  "NEEE is a fictional examination portal built as an educational frontend engineering demonstration: notices, announcements and a mock candidate result flow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <NewsCarousel />
      <div className="mx-auto grid max-w-[1180px] gap-8 px-3 py-8 lg:grid-cols-2 lg:gap-10">
        <NoticePanel />
        <div className="space-y-8">
          <Introduction />
          <CandidateActivity />
        </div>
      </div>
    </SiteShell>
  );
}
