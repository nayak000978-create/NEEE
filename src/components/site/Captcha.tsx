import { RefreshCw } from "lucide-react";

export function Captcha({ value, onRefresh }: { value: string; onRefresh: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="select-none bg-navy px-3 py-1.5 font-mono text-lg tracking-[0.2em] text-primary-foreground">
        {value}
      </span>
      <button
        type="button"
        aria-label="Refresh CAPTCHA"
        onClick={onRefresh}
        className="bg-navy p-2 text-primary-foreground transition-opacity hover:opacity-90"
      >
        <RefreshCw size={15} />
      </button>
    </div>
  );
}
