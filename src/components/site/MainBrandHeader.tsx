import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/neee-logo.png.asset.json";

export function MainBrandHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1180px] items-center gap-4 px-3 py-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="NEEE logo"
            width={220}
            height={86}
            className="h-12 w-auto shrink-0 md:h-14"
          />
          <span className="sr-only">NEEE — National Engineering Entrance Examination</span>
        </Link>

        <div className="text-center">
          <p className="text-[13px] text-muted-foreground">राष्ट्रीय इंजीनियरिंग प्रवेश परीक्षा</p>
          <h1 className="text-lg font-bold leading-tight text-navy md:text-2xl">
            National Engineering Entrance Examination
          </h1>
          <p className="text-[13px] font-semibold tracking-wide text-muted-foreground">NEEE</p>
        </div>

        <div className="hidden justify-end md:flex">
          <div className="border-l border-border pl-4 text-right">
            <p className="text-[13px] font-bold text-navy">NEEE Examination Authority</p>
            <p className="text-[11px] text-muted-foreground">
              Fictional educational demonstration body
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
