import {
  BookOpen,
  CalendarClock,
  Globe2,
  LineChart,
  MonitorSmartphone,
  Waypoints,
} from "lucide-react";
import { FEATURES, FOUNDER, STEPS } from "@/lib/site";

const ICONS = [BookOpen, CalendarClock, Waypoints, MonitorSmartphone, Globe2, LineChart];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-border paper-grid">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۲ — قابلیت‌ها</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          از سیلابس تا رشد برند، همه روی یک شبکه.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          هر قابلیت برای کلاس، جلسه خصوصی و اداره دیجیتال کسب‌وکار طراحی شده — همان مسیری که
          {` ${FOUNDER.shortName} `}
          از ۱۳۹۹ در مشاوره و اجرا طی کرده است.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={feature.id}
                className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 overflow-hidden rounded-xl bg-ink text-ink-foreground md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs font-medium tracking-wide text-ink-foreground/55">مسیر شروع</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">سه گام تا کرسی فعال</h3>
            <ol className="mt-8 space-y-6">
              {STEPS.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-sm tabular-nums text-ink-foreground/45">{step.n}</span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-foreground/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-64">
            <img
              src="/media/portrait-cafe.jpg"
              alt={`${FOUNDER.name}، مشاور فناوری در جلسه کاری`}
              className="absolute inset-0 size-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
