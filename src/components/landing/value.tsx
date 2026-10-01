import { PERSONAS } from "@/lib/site";

export function Value() {
  return (
    <section id="value" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۱ — مسیر</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          شاگرد می‌خواهد. مربی می‌پذیرد. پشتیبان ارجاع می‌دهد.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          شبکه سراسری است، اما درِ کلاس دست معلم کیش است. بدون احراز هویت مربی و بدون ارجاع محمود،
          پرداخت و جلسه انجام نمی‌شود.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PERSONAS.map((persona, i) => (
            <article
              key={persona.title}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <p className="text-xs tabular-nums text-muted-foreground">
                {["۰۱", "۰۲", "۰۳"][i]}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{persona.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{persona.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
