const SCORES = [
  ["Physics", "88.40"],
  ["Chemistry", "91.20"],
  ["Mathematics", "84.75"],
];

export function MockResult({ applicationNumber }: { applicationNumber: string }) {
  const rows: [string, string][] = [
    ["Candidate Name", "DEMO CANDIDATE"],
    ["Application Number", applicationNumber],
    ["Examination Session", "NEEE 2026 — Mock Session 2"],
    ...(SCORES as [string, string][]),
    ["Total Score", "264.35"],
    ["Percentile", "97.6421538"],
    ["Mock Rank", "12,486"],
  ];

  return (
    <div className="mx-auto w-full max-w-[850px]">
      <p className="border border-brand-orange bg-brand-orange px-4 py-2 text-center text-[13px] font-bold uppercase tracking-wide text-brand-orange-foreground">
        Demo Result — Fictional Educational Project
      </p>

      <div className="mt-4 border border-border bg-background">
        <div className="border-b border-border bg-navy px-4 py-3 text-center text-primary-foreground">
          <p className="text-[13px] tracking-wide">NEEE 2026</p>
          <h2 className="text-lg font-bold md:text-xl">NEEE MOCK SCORE CARD</h2>
        </div>

        <table className="w-full text-[13.5px]">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-border last:border-0">
                <th scope="row" className="w-1/2 bg-panel px-4 py-2.5 text-left font-medium">
                  {label}
                </th>
                <td className="px-4 py-2.5 font-semibold text-navy">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[12px] text-muted-foreground">
        All values above are invented for demonstration purposes and do not represent any real
        examination, candidate or authority.
      </p>
    </div>
  );
}
