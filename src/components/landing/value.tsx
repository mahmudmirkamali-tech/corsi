import { FOUNDER, PERSONAS } from "@/lib/site";

export function Value() {
  return (
    <section id="value" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۱ — پیشنهاد ارزش</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          سه نقش، یک میز کار. ابزارها دیگر از هم جدا نیستند.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          مدرس دانشگاه سیلابس می‌نویسد، آموزگار خصوصی جلسه می‌گیرد، مدیر امور دیجیتال رشد می‌خواهد.
          آتیسا این سه جریان را روی کرسی {FOUNDER.shortName} می‌نشاند تا آموزش و بازاریابی دیجیتال پراکنده نشود.
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
