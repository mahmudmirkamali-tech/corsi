import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FOUNDER, PAYMENT, STATS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-ink-foreground"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 ink-grid opacity-70" />
      <img
        src="/media/hero-hall.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-30 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-ink via-ink/88 to-ink/50" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="stagger-in md:col-span-6">
          <Badge variant="ink">{FOUNDER.role}</Badge>
          <p className="mt-4 text-sm text-ink-foreground/70">{FOUNDER.fields}</p>
          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {FOUNDER.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-ink-foreground/90">{FOUNDER.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            مربی آنلاین بخواهید. مربیان هر شهر پس از احراز می‌پذیرند؛ جلسه با ارجاع پشتیبان کیش قطعی
            می‌شود. اقتصاد روشن: {PAYMENT.hourly} {PAYMENT.coin} در ساعت — ۴ برای مربی، ۰٫۵ برای کیش،
            ۰٫۵ برای شبکه.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="inverted" size="lg">
              <a href="#signup">
                درخواست مربی
                <ArrowLeft />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ink-foreground/20 text-ink-foreground hover:bg-ink-foreground/10"
            >
              <a href="#signup">ثبت‌نام مربی</a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-xl bg-ink-foreground/10 p-2">
              <img
                src="/media/portrait-cinematic.jpg"
                alt={`${FOUNDER.name}، معلم و پشتیبان شهر کیش`}
                className="w-full rounded-lg object-cover object-top outline outline-1 -outline-offset-1 outline-ink-foreground/15"
              />
            </div>
            <div className="absolute bottom-6 right-6 left-6 rounded-md bg-ink/80 px-4 py-3 text-ink-foreground">
              <p className="text-sm font-medium">{FOUNDER.shortName}</p>
              <p className="mt-1 text-xs text-ink-foreground/70">
                پشتیبان شهر کیش · ارجاع مربیان احرازشده
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink-foreground/10">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-5 py-6">
              <dt className="text-xs text-ink-foreground/55">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
