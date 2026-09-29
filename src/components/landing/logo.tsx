export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5" aria-label="آتیسا، بازگشت به بالا">
      <span
        className={
          inverted
            ? "flex size-8 items-center justify-center rounded-sm bg-ink-foreground text-ink"
            : "flex size-8 items-center justify-center rounded-sm bg-ink text-ink-foreground"
        }
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none">
          <path
            d="M7 24V12.5L16 7l9 5.5V24"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M11 24v-7h10v7" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16" cy="14.5" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight">آتیسا</span>
    </a>
  );
}
