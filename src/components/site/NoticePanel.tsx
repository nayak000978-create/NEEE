import { useState } from "react";

const NOTICES = [
  "NEEE 2026 Information Bulletin (Fictional) Released for Candidate Reference",
  "NEEE 2026 Mock Registration Schedule Announced for Practice Sessions",
  "NEEE 2026 Sample Answer Key Available for Practice Paper 1 (Engineering)",
  "NEEE Mock Examination Schedule Announced Across Demonstration Centres",
  "NEEE 2026 Candidate Instructions for the Practice Examination Portal",
  "Advisory for NEEE 2026 Aspirants Regarding Mock Portal Availability",
  "Display of Practice Response Sheet and Provisional Answer Key — NEEE 2026 Mock Session 2",
];

const EVENTS = [
  "NEEE Practice Examination Portal Open for All Registered Demo Candidates",
  "NEEE Mock Score Card Demonstration Published for Session 2",
  "Webinar: Understanding the NEEE Mock Examination Interface",
  "NEEE Sample Question Papers Added for Physics, Chemistry and Mathematics",
];

export function NoticePanel() {
  const [tab, setTab] = useState<"notices" | "events">("notices");
  const list = tab === "notices" ? NOTICES : EVENTS;

  return (
    <section>
      <div className="flex gap-1" role="tablist" aria-label="Announcements">
        {(
          [
            ["notices", "Public Notices"],
            ["events", "News & Events"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            type="button"
            onClick={() => setTab(key)}
            className={
              tab === key
                ? "border border-b-0 border-border bg-panel px-4 py-2 text-[13.5px] font-semibold text-navy"
                : "border border-b-0 border-border bg-accent px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <div className="border border-border bg-panel p-4 md:p-6">
        <ul className="space-y-4">
          {list.map((item) => (
            <li key={item} className="flex gap-2 text-[13.5px] leading-relaxed text-foreground">
              <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
              <a href="#" className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-6 bg-brand-orange px-4 py-2 text-[13.5px] font-medium text-brand-orange-foreground transition-opacity hover:opacity-90"
        >
          View All
        </button>
      </div>
    </section>
  );
}
