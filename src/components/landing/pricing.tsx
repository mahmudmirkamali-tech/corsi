import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۳ — قیمت‌گذاری</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          از یک درس آزمایشی تا همراهی رشد دیجیتال.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          طرح رایگان برای شروع. کرسی برای تدریس و مشاوره تمام‌وقت. دانشکده برای تیم و مدیر امور دیجیتال.
          هر طرح را می‌توانید ماهانه لغو کنید.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "flex flex-col rounded-xl p-6",
                plan.featured
                  ? "bg-ink text-ink-foreground shadow-[var(--shadow-border)]"
                  : "bg-surface text-foreground shadow-[var(--shadow-border)]",
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-ink-foreground/10 px-3 py-1 text-xs">
                    پرکاربرد
                  </span>
                ) : null}
              </div>
              <p className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold tabular-nums tracking-tight">{plan.price}</span>
                <span
                  className={cn(
                    "mb-1 text-sm",
                    plan.featured ? "text-ink-foreground/60" : "text-muted-foreground",
                  )}
                >
                  {plan.unit}
                </span>
              </p>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.featured ? "text-ink-foreground/65" : "text-muted-foreground",
                )}
              >
                {plan.note}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.featured ? "text-ink-foreground" : "text-primary",
                      )}
                      strokeWidth={1.8}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.featured ? "inverted" : "default"}
              >
                <a href="#signup">{plan.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
