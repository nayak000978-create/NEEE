import { useState } from "react";
import { Lock } from "lucide-react";
import { Captcha } from "./Captcha";

const DEMO = { applicationNumber: "260001234567", password: "neee2026" };

function makeCaptcha() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(
    { length: 6 },
    () => chars[Math.floor(Math.random() * chars.length)] ?? "x",
  ).join("");
}

export function ResultLogin({ onSuccess }: { onSuccess: (applicationNumber: string) => void }) {
  const [captcha, setCaptcha] = useState("3TyKkL");
  const [form, setForm] = useState({ app: "", pass: "", cap: "" });
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form.cap !== captcha) {
      setError("CAPTCHA does not match (case sensitive).");
      setCaptcha(makeCaptcha());
      return;
    }
    if (form.app !== DEMO.applicationNumber || form.pass !== DEMO.password) {
      setError("Invalid demo credentials. Use the demo values listed below.");
      return;
    }
    setError(null);
    onSuccess(form.app);
  }

  const rowClass = "grid gap-1.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-center sm:gap-4";
  const labelClass = "text-[13.5px] text-foreground sm:text-right";
  const inputClass =
    "w-full max-w-[280px] border border-input bg-background px-2 py-1.5 text-[14px] outline-none focus:border-navy";

  return (
    <div className="mx-auto w-full max-w-[850px] border border-border bg-background">
      <h2 className="flex items-center gap-2 bg-navy px-4 py-2.5 text-[17px] font-semibold text-primary-foreground">
        <Lock size={16} aria-hidden /> View Result
      </h2>

      <form onSubmit={submit} className="space-y-4 p-4 md:p-8">
        <div className={rowClass}>
          <label htmlFor="app" className={labelClass}>
            Application Number :
          </label>
          <input
            id="app"
            className={inputClass}
            value={form.app}
            onChange={(e) => setForm({ ...form, app: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className={rowClass}>
          <label htmlFor="pass" className={labelClass}>
            Password :
          </label>
          <input
            id="pass"
            type="password"
            className={inputClass}
            value={form.pass}
            onChange={(e) => setForm({ ...form, pass: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className={rowClass}>
          <label htmlFor="cap" className={labelClass}>
            Enter CAPTCHA <span className="font-semibold text-success">(case sensitive)</span> :
          </label>
          <input
            id="cap"
            className={inputClass}
            value={form.cap}
            onChange={(e) => setForm({ ...form, cap: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className={rowClass}>
          <span className={labelClass}>CAPTCHA :</span>
          <Captcha value={captcha} onRefresh={() => setCaptcha(makeCaptcha())} />
        </div>

        {error ? (
          <p className="text-[13px] text-destructive sm:pl-[calc(41.6%)]">{error}</p>
        ) : null}

        <div className={rowClass}>
          <span aria-hidden />
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="bg-success px-5 py-2 text-[14px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              LOGIN
            </button>
            <a href="#" className="text-[13.5px] font-semibold text-navy underline">
              Forgot Password ?
            </a>
          </div>
        </div>

        <p className="border-t border-border pt-4 text-[12.5px] text-muted-foreground">
          Fictional demonstration only — never enter real credentials. Demo login: application
          number <strong>{DEMO.applicationNumber}</strong>, password <strong>{DEMO.password}</strong>.
        </p>
      </form>
    </div>
  );
}
