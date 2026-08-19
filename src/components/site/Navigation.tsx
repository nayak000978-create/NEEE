import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

const items: { label: string; to: string; hasMenu?: boolean }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/", hasMenu: true },
  { label: "Information", to: "/", hasMenu: true },
  { label: "FAQ", to: "/" },
  { label: "Question Papers", to: "/", hasMenu: true },
  { label: "Candidates' Corner", to: "/result", hasMenu: true },
  { label: "Archive", to: "/", hasMenu: true },
  { label: "Contact Us", to: "/" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main" className="border-b border-border bg-warm-gray">
      <div className="mx-auto max-w-[1180px] px-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 py-2.5 text-sm font-semibold text-navy md:hidden"
          aria-expanded={open}
        >
          {open ? <Menu size={18} /> : <Menu size={18} />}
          Menu
        </button>

        <ul className="hidden md:flex md:items-stretch">
          {items.map((item, i) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: true }}
                className={
                  "flex items-center gap-1 px-3.5 py-2.5 text-[13.5px] font-medium text-foreground transition-colors hover:bg-accent " +
                  (i === 0 ? "" : "")
                }
                activeProps={{
                  className:
                    "flex items-center gap-1 bg-brand-orange px-3.5 py-2.5 text-[13.5px] font-semibold text-brand-orange-foreground",
                }}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown size={13} /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <ul className="border-t border-border bg-background md:hidden">
          {items.map((item) => (
            <li key={item.label} className="border-b border-border last:border-0">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm text-foreground"
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "flex items-center justify-between bg-brand-orange px-3 py-2.5 text-sm font-semibold text-brand-orange-foreground",
                }}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown size={14} /> : <X size={0} />}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
