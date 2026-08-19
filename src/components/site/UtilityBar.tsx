import { Search, Network, Accessibility, Languages } from "lucide-react";

const actions = [
  { label: "Search", Icon: Search },
  { label: "Sitemap", Icon: Network },
  { label: "Accessibility", Icon: Accessibility },
  { label: "Language", Icon: Languages },
];

export function UtilityBar() {
  return (
    <div className="border-b border-border bg-warm-gray">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-3 py-1.5">
        <div className="min-w-0 text-[11px] leading-tight text-muted-foreground">
          <span className="block font-semibold uppercase tracking-wide text-foreground">NEEE</span>
          <span className="block truncate">National Engineering Entrance Examination</span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {actions.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              title={label}
              className="rounded-sm border border-border bg-background p-1.5 text-foreground transition-colors hover:bg-accent"
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
