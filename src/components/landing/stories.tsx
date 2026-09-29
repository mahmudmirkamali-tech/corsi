import { STORIES } from "@/lib/site";

export function Stories() {
  return (
    <section id="stories" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۴ — صدای همراهان</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          کلاس، جلسه خصوصی و رشد دیجیتال روی یک مسیر.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                «{story.quote}»
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-primary"
                  aria-hidden="true"
                >
                  {story.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{story.name}</span>
                  <span className="block text-xs text-muted-foreground">{story.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
