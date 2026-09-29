import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FOUNDER, ROLES, WAITLIST_KEY } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "error" | "done";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<(typeof ROLES)[number]["id"]>("lecturer");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedName.length < 2) {
      setStatus("error");
      setMessage("نام را کامل وارد کنید.");
      return;
    }
    if (!isEmail(trimmedEmail)) {
      setStatus("error");
      setMessage("یک ایمیل معتبر وارد کنید.");
      return;
    }
    const entry = {
      name: trimmedName,
      email: trimmedEmail,
      role,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem(WAITLIST_KEY) ?? "[]") as unknown[];
      const list = Array.isArray(prev) ? prev : [];
      localStorage.setItem(WAITLIST_KEY, JSON.stringify([entry, ...list].slice(0, 50)));
    } catch {
      /* ignore quota */
    }
    setStatus("done");
    setMessage("");
  }

  return (
    <section id="signup" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden bg-ink">
          <img
            src="/media/portrait-cinematic.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover object-top opacity-80 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
          <div className="relative flex h-full min-h-72 flex-col justify-end p-8 text-ink-foreground md:p-10">
            <p className="text-xs font-medium tracking-wide text-ink-foreground/70">۰۵ — شروع</p>
            <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight">
              با {FOUNDER.shortName} کرسی را این هفته باز کنید.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
              ایمیل بگذارید تا دسترسی ۱۴ روزه طرح کرسی برایتان باز شود. برای گفتگوی مستقیم:
            </p>
            <p className="mt-4 flex flex-col gap-1 text-sm">
              <a href={`mailto:${FOUNDER.email}`} className="hover:underline" dir="ltr">
                {FOUNDER.email}
              </a>
              <a href={`tel:${FOUNDER.phone}`} className="hover:underline">
                {FOUNDER.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-surface px-5 py-12 md:px-10 md:py-16">
          {status === "done" ? (
            <div className="flex h-full min-h-64 flex-col justify-center">
              <CheckCircle2 className="size-8 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">در فهرست قرار گرفتید.</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                پیام شروع آزمایشی به ایمیل شما می‌رسد. تا آن لحظه می‌توانید قابلیت‌ها را مرور کنید یا مستقیم تماس بگیرید.
              </p>
              <Button asChild variant="outline" className="mt-6 w-fit">
                <a href={`tel:${FOUNDER.phone}`}>{FOUNDER.phoneDisplay}</a>
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
              <div className="space-y-2">
                <Label htmlFor="full-name">نام و نام خانوادگی</Label>
                <Input
                  id="full-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام شما"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل کاری</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  dir="ltr"
                  className="text-start"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                />
              </div>
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium">نقش شما</legend>
                <div className="grid gap-2">
                  {ROLES.map((item) => (
                    <label
                      key={item.id}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 text-sm transition-colors duration-150",
                        role === item.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background hover:bg-muted",
                      )}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={item.id}
                        checked={role === item.id}
                        onChange={() => setRole(item.id)}
                        className="size-4 accent-primary"
                        suppressHydrationWarning
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </fieldset>
              {status === "error" ? (
                <p className="text-sm text-primary" role="alert">
                  {message}
                </p>
              ) : null}
              <Button type="submit" size="lg" className="w-full">
                دریافت دسترسی آزمایشی
                <ArrowLeft />
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                با ارسال فرم فقط برای اطلاع شروع آزمایشی با شما تماس می‌گیریم.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
