import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TokenizeButton } from "@/components/landing/tokenize-button";
import { addDotOneChain, DOTONE, readDotoBalance, shortAddr, TREASURY } from "@/lib/doto";
import { getDotOneStatus, type DotOneStatus } from "@/lib/doto-rpc";
import { faNum } from "@/lib/economy";
import { FOUNDER } from "@/lib/site";
import { loadActivity, loadTokens, subscribeStore, type ChainActivity, type ClassToken } from "@/lib/store";

export function DotoChain() {
  const [status, setStatus] = useState<DotOneStatus | null>(null);
  const [tokens, setTokens] = useState<ClassToken[]>([]);
  const [activity, setActivity] = useState<ChainActivity[]>([]);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [walletMsg, setWalletMsg] = useState("");

  function refresh() {
    setTokens(loadTokens());
    setActivity(loadActivity());
  }

  useEffect(() => {
    refresh();
    return subscribeStore(refresh);
  }, []);

  useEffect(() => {
    getDotOneStatus()
      .then(setStatus)
      .catch(() =>
        setStatus({ ok: false, rpc: DOTONE.rpc, block: null, chainId: DOTONE.chainId }),
      );
  }, []);

  async function onConnect() {
    setWalletMsg("");
    try {
      const addr = await addDotOneChain();
      setAccount(addr);
      const doto = await readDotoBalance(addr);
      setBalance(doto);
    } catch (error) {
      setWalletMsg(error instanceof Error ? error.message : "اتصال کیف انجام نشد.");
    }
  }

  return (
    <section id="doto" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۵ — شبکه دوتو</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          فعالیت روی دات‌وان توکنیزه می‌شود.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          هر جلسهٔ ارجاع‌شده یک توکن {DOTONE.tokenName} می‌گیرد و پرداخت با کوین بومی {DOTONE.symbol} روی
          زنجیره {DOTONE.shortName} با شناسه {DOTONE.chainId} ثبت می‌شود. {FOUNDER.shortName} ارجاع
          می‌دهد؛ زنجیره تسویه را نگه می‌دارد.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TokenizeButton size="lg" />
          <Button variant="outline" size="lg" onClick={onConnect}>
            اتصال کیف‌پول دات‌وان
          </Button>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Meta label="شبکه" value={DOTONE.shortName} hint={`Chain ID ${DOTONE.chainId}`} />
          <Meta
            label="ارتفاع بلوک"
            value={status?.ok && status.block != null ? faNum(status.block) : "آماده نود"}
            hint={status?.ok ? "نود عمومی پاسخ داد" : "دفتر محلی زنجیره ۵۰۵"}
          />
          <Meta label="کوین بومی" value={DOTONE.symbol} hint={`${DOTONE.decimals} رقم اعشار`} />
          <Meta label="توکن جلسه" value={DOTONE.tokenName} hint={`${faNum(tokens.length)} ضرب‌شده`} />
        </dl>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <article className="rounded-xl bg-ink p-6 text-ink-foreground shadow-[var(--shadow-border)] lg:col-span-5">
            <h3 className="text-lg font-semibold">کیف و خزانه دوتو</h3>
            <p className="mt-2 text-sm text-ink-foreground/70">
              شبکه را به کیف اضافه کنید. اگر کیف در مرورگر نیست، خزانه کیش و شبکه همین‌جا فعال‌اند.
            </p>
            <TokenizeButton className="mt-5 w-full" variant="inverted" />
            <Button variant="outline" className="mt-2 w-full border-ink-foreground/20 text-ink-foreground hover:bg-ink-foreground/10" onClick={onConnect}>
              اتصال کیف‌پول دات‌وان
            </Button>
            {account ? (
              <p className="mt-3 font-mono text-xs" dir="ltr">
                {shortAddr(account)}
                {balance != null ? ` · ${balance} DOTO` : ""}
              </p>
            ) : null}
            {walletMsg ? (
              <p className="mt-3 text-sm text-ink-foreground/80" role="alert">
                {walletMsg}
              </p>
            ) : null}
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                خزانه کیش · <span dir="ltr">{shortAddr(TREASURY.kish)}</span>
              </li>
              <li>
                خزانه شبکه · <span dir="ltr">{shortAddr(TREASURY.network)}</span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-ink-foreground/55">
              کاوشگر: dotscan.one · RPC عمومی دات‌وان
            </p>
          </article>

          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-7">
            <h3 className="text-lg font-semibold">توکن‌های جلسه</h3>
            {tokens.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                هنوز توکنی ضرب نشده. دکمه «تسویه و توکنیزه» را بزنید تا جلسه روی دات‌وان ثبت شود.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {tokens.map((token) => (
                  <li key={token.tokenId} className="rounded-md border border-border p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-medium">{token.tokenId}</p>
                      <p className="text-xs tabular-nums text-muted-foreground">
                        بلوک {faNum(token.block)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {token.learner} ← {token.coach} · {token.subject} · {faNum(token.hours)} ساعت ·{" "}
                      {faNum(token.doto)} DOTO
                    </p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground" dir="ltr">
                      {shortAddr(token.txHash)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>

        <article className="mt-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
          <h3 className="text-lg font-semibold">دفتر فعالیت زنجیره</h3>
          {activity.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">پس از تسویه، ضرب توکن و انتقال دوتو اینجا می‌آید.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {activity.map((item) => (
                <li key={item.id} className="grid gap-1 border-b border-border pb-3 last:border-0 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground" dir="ltr">
                      {shortAddr(item.from)} → {shortAddr(item.to)}
                    </p>
                  </div>
                  <p className="text-sm tabular-nums">
                    {faNum(item.amount)} {item.asset}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  );
}

function Meta({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums">{value}</dd>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
