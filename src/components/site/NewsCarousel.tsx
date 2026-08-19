import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const DEFAULT_NEWS = [
  "NEEE Mock Examination Schedule Released",
  "NEEE Sample Question Papers Available",
  "NEEE Mock Score Card Demonstration Available",
  "NEEE Candidate Instructions Updated",
  "NEEE Practice Examination Portal Open",
];

export function NewsCarousel({ items = DEFAULT_NEWS }: { items?: string[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [playing, setPlaying] = useState(true);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (delta: 1 | -1) => {
      setDir(delta);
      setIndex((i) => (i + delta + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [playing, go]);

  return (
    <section
      aria-label="Latest news"
      className="bg-navy text-primary-foreground"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === " ") {
          e.preventDefault();
          setPlaying((p) => !p);
        }
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="mx-auto flex max-w-[1180px] items-stretch px-0">
        <div className="flex shrink-0 items-center border-r border-primary-foreground/20 bg-navy-dark px-3 py-3 text-[13px] font-bold uppercase tracking-wide md:px-6 md:text-base">
          Latest News
        </div>

        <div className="flex min-w-0 flex-1 items-center overflow-hidden px-3 py-3">
          <p
            key={index}
            className="w-full truncate text-center text-[13px] md:text-[15px]"
            style={{
              animation: `neee-news-in 450ms ease-out`,
              ["--neee-from" as string]: dir === 1 ? "40px" : "-40px",
            }}
          >
            {items[index]}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 px-2">
          <button
            type="button"
            aria-label="Previous announcement"
            onClick={() => go(-1)}
            className="p-1 transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause announcements" : "Play announcements"}
            onClick={() => setPlaying((p) => !p)}
            className="p-1 transition-opacity hover:opacity-70"
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <button
            type="button"
            aria-label="Next announcement"
            onClick={() => go(1)}
            className="p-1 transition-opacity hover:opacity-70"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
