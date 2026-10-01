import { useMemo, useState } from "react";
import { SPLIT, faNum, splitHours } from "@/lib/economy";
import { FOUNDER, PAYMENT } from "@/lib/site";

export function Economy() {
  const [hours, setHours] = useState(5);
  const ledger = useMemo(() => splitHours(hours), [hours]);

  return (
    <section id="economy" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۴ — اقتصاد شبکه</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          پنج دوتو در ساعت؛ تقسیم روشن، بدون نرخ پنهان.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          شاگرد می‌پردازد. مربی دستمزد می‌گیرد. پشتیبان کیش بابت اعتماد و ارجاع سهم دارد. شبکه بابت احراز
          و تسویه روی {PAYMENT.chain}. {FOUNDER.shortName} درِ اقتصاد را باز می‌کند، نه قیمت را مبهم.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl bg-ink text-ink-foreground">
          <div className="grid grid-cols-10">
            <div className="col-span-8 bg-primary px-4 py-3 text-xs font-medium">
              مربی ۸۰٪
            </div>
            <div className="col-span-1 bg-ink-foreground/20 px-1 py-3 text-center text-xs">کیش</div>
            <div className="col-span-1 bg-ink-foreground/10 px-1 py-3 text-center text-xs">شبکه</div>
          </div>
          <dl className="grid gap-px border-t border-ink-foreground/10 sm:grid-cols-4">
            <Stat label="پرداخت شاگرد" value={faNum(SPLIT.hourly)} hint="در ساعت" />
            <Stat label="سهم مربی" value={faNum(SPLIT.coach)} hint="۸۰٪" />
            <Stat label="پشتیبان کیش" value={faNum(SPLIT.kish)} hint="۱۰٪" />
            <Stat label="شبکه آتیسا" value={faNum(SPLIT.network)} hint="۱۰٪" />
          </dl>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-7">
            <h3 className="text-lg font-semibold">ماشین‌حساب جلسه</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              ساعت را عوض کنید تا سهم مربی، کیش و شبکه همان لحظه دیده شود.
            </p>
            <label className="mt-6 block">
              <span className="text-sm font-medium">ساعت کلاس: {faNum(ledger.hours)}</span>
              <input
                type="range"
                min={1}
                max={20}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              />
            </label>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <Row label="پرداخت شاگرد" value={`${faNum(ledger.total)} ${PAYMENT.ticker}`} />
              <Row label="دستمزد مربی" value={`${faNum(ledger.coach)} ${PAYMENT.ticker}`} />
              <Row label="سهم پشتیبان کیش" value={`${faNum(ledger.kish)} ${PAYMENT.ticker}`} />
              <Row label="سهم شبکه" value={`${faNum(ledger.network)} ${PAYMENT.ticker}`} />
            </dl>
          </article>

          <article className="flex flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-5">
            <div>
              <h3 className="text-lg font-semibold">چرا این تقسیم؟</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>مربی باید بتواند از هر شهر ایران تدریس کند و دستمزد اصلی را ببرد.</li>
                <li>پشتیبان کیش بابت احراز و ارجاع شخصی مسئولیت می‌گیرد؛ سهم اعتماد است نه کمیسیون پنهان.</li>
                <li>شبکه فقط تسویه و تطبیق را اداره می‌کند. قیمت جلسه همیشه ضریب ۵ دوتو است.</li>
              </ul>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              تسویه بعد از ارجاع در پنل پشتیبان ثبت می‌شود.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="px-5 py-6">
      <dt className="text-xs text-ink-foreground/55">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
        {value} <span className="text-sm font-medium text-ink-foreground/60">{PAYMENT.ticker}</span>
      </dd>
      <p className="mt-1 text-xs text-ink-foreground/45">{hint}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium tabular-nums">{value}</dd>
    </div>
  );
}
