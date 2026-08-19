import { FileText } from "lucide-react";

const COLUMNS = [
  { title: "Helpdesk", links: ["Contact", "FAQ", "Candidate Support"] },
  { title: "Additional Links", links: ["About", "Information", "Syllabus", "Question Papers"] },
  {
    title: "Important Links",
    links: ["Mock Examination", "Mock Results", "Candidate Corner", "Archive"],
  },
];

const DISCLAIMER =
  "NEEE is an independent educational demonstration project and is not affiliated with or endorsed by any government organisation, examination authority or real institution.";

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="bg-navy py-10 text-primary-foreground">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-3 sm:grid-cols-2 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FileText size={18} aria-hidden />
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2 text-[14px]">
                {col.links.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-current" />
                    <a href="#" className="hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-background py-6">
        <div className="mx-auto grid max-w-[1180px] gap-3 px-3 sm:grid-cols-3">
          {[
            ["Practice Examination", "Attempt fictional NEEE mock papers"],
            ["Candidate Guidance", "Instructions, syllabus and sample papers"],
            ["Result Demonstration", "View a fictional NEEE mock score card"],
          ].map(([title, text]) => (
            <div key={title} className="border border-border p-4">
              <p className="text-[13.5px] font-semibold text-navy">{title}</p>
              <p className="mt-1 text-[12.5px] text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy-dark py-3 text-primary-foreground">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 text-[13px]">
          {["Privacy", "Terms", "Accessibility", "Contact"].map((l, i) => (
            <span key={l} className="flex items-center gap-3">
              {i > 0 ? <span aria-hidden>/</span> : null}
              <a href="#" className="hover:underline">
                {l}
              </a>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-foreground py-6 text-center text-background">
        <p className="text-[13px] font-semibold">
          NEEE — National Engineering Entrance Examination
        </p>
        <p className="mt-1 text-[12.5px] opacity-80">Independent Educational Demonstration Project</p>
        <p className="mx-auto mt-3 max-w-[760px] px-4 text-[11.5px] leading-relaxed opacity-70">
          {DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
