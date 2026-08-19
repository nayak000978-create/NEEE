import { Link } from "@tanstack/react-router";

const LINKS: { label: string; to?: string }[] = [
  { label: "NEEE Mock Score Card", to: "/result" },
  { label: "NEEE Mock Admit Card" },
  { label: "NEEE Mock Answer Key" },
  { label: "NEEE Practice Examination" },
  { label: "NEEE Question Papers" },
  { label: "NEEE Candidate Portal", to: "/result" },
];

export function CandidateActivity() {
  return (
    <section className="border border-border bg-panel p-4 md:p-6">
      <h2 className="text-xl font-bold text-navy md:text-2xl">Candidate Activity</h2>
      <ul className="mt-4 space-y-3.5">
        {LINKS.map((item) => (
          <li key={item.label} className="flex gap-2 text-[14px] leading-relaxed">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
            {item.to ? (
              <Link to={item.to} className="text-navy hover:underline">
                {item.label}
              </Link>
            ) : (
              <a href="#" className="text-navy hover:underline">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
