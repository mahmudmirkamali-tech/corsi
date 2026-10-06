import { useEffect, useState } from "react";
import { TokenizeButton } from "@/components/landing/tokenize-button";
import { Button } from "@/components/ui/button";
import { faNum } from "@/lib/economy";
import { FOUNDER, PAYMENT } from "@/lib/site";
import {
  economyTotals,
  loadCoaches,
  loadRequests,
  loadSessions,
  referCoach,
  settleSession,
  subscribeStore,
  type CoachApp,
  type LearnerRequest,
  type Session,
} from "@/lib/store";

export function Referral() {
  const [coaches, setCoaches] = useState<CoachApp[]>([]);
  const [requests, setRequests] = useState<LearnerRequest[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [pick, setPick] = useState<Record<string, string>>({});

  function refresh() {
    setCoaches(loadCoaches());
    setRequests(loadRequests());
    setSessions(loadSessions());
  }

  useEffect(() => {
    refresh();
    return subscribeStore(refresh);
  }, []);

  const pending = coaches.filter((c) => c.status === "pending");
  const approved = coaches.filter((c) => c.status === "approved");
  const open = requests.filter((r) => r.status !== "settled");
  const totals = economyTotals();

  return (
    <section id="referral" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۸ — پنل پشتیبان کیش</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          ارجاع، تسویه، ضرب توکن دوتو.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {FOUNDER.shortName} مربی را ارجاع می‌دهد، سپس درخواست را تسویه می‌کند. همان لحظه توکن جلسه
          ATISA ضرب و دوتو بین مربی، کیش و شبکه تقسیم می‌شود.
        </p>
        <div className="mt-8">
          <TokenizeButton />
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Mini label="حجم تسویه‌شده" value={`${faNum(totals.total)} ${PAYMENT.ticker}`} />
          <Mini label="دستمزد مربیان" value={`${faNum(totals.coach)} ${PAYMENT.ticker}`} />
          <Mini label="سهم کیش" value={`${faNum(totals.kish)} ${PAYMENT.ticker}`} />
          <Mini label="ساعت کلاس" value={faNum(totals.hours)} />
        </dl>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-lg font-semibold">صف احراز و ارجاع مربی</h3>
            {pending.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">مربی در انتظار ارجاع نیست.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {pending.map((coach) => (
                  <li
                    key={coach.id}
                    className="flex flex-col gap-3 rounded-md border border-border p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{coach.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {coach.city} · {coach.subject}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        setCoaches(referCoach(coach.id));
                      }}
                    >
                      ارجاع می‌کنم
                    </Button>
                  </li>
                ))}
              </ul>
            )}
            {approved.length > 0 ? (
              <div className="mt-6">
                <p className="text-xs text-muted-foreground">آماده تسویه</p>
                <ul className="mt-2 space-y-2">
                  {approved.map((coach) => (
                    <li key={coach.id} className="text-sm">
                      {coach.name} · {coach.city} · {coach.subject}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>

          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-lg font-semibold">درخواست باز و تسویه</h3>
            {open.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">درخواست بازی برای تسویه نیست.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {open.map((req) => (
                  <li key={req.id} className="space-y-3 rounded-md border border-border p-3">
                    <div>
                      <p className="text-sm font-medium">{req.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {req.city} · {req.subject} · {faNum(req.hours)} ساعت ·{" "}
                        {faNum(req.hours * PAYMENT.hourly)} {PAYMENT.ticker}
                      </p>
                    </div>
                    {approved.length === 0 ? (
                      <p className="text-xs text-muted-foreground">اول مربی را ارجاع دهید.</p>
                    ) : (
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <select
                          className="h-11 flex-1 rounded-md border border-border bg-background px-3 text-sm"
                          value={pick[req.id] ?? approved[0]?.id ?? ""}
                          onChange={(e) => setPick((prev) => ({ ...prev, [req.id]: e.target.value }))}
                        >
                          {approved.map((coach) => (
                            <option key={coach.id} value={coach.id}>
                              {coach.name} · {coach.city}
                            </option>
                          ))}
                        </select>
                        <Button
                          size="sm"
                          onClick={() => {
                            const coachId = pick[req.id] ?? approved[0]?.id;
                            if (coachId) settleSession(req.id, coachId);
                          }}
                        >
                        تسویه و توکنیزه
                        </Button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>

        {sessions.length > 0 ? (
          <div className="mt-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-lg font-semibold">دفتر اقتصاد</h3>
            <ul className="mt-4 space-y-3">
              {sessions.map((session) => (
                <li key={session.id} className="flex flex-col gap-1 border-b border-border pb-3 text-sm last:border-0">
                  <p className="font-medium">
                    {session.learnerName} ← {session.coachName} · {session.subject}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {faNum(session.hours)} ساعت · {session.tokenId} · مربی {faNum(session.coachShare)} · کیش{" "}
                    {faNum(session.kishShare)} · شبکه {faNum(session.networkShare)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums">{value}</dd>
    </div>
  );
}
