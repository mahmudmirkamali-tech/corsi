import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CITIES, FOUNDER, PAYMENT, SUBJECTS } from "@/lib/site";
import { saveCoach, saveRequest } from "@/lib/store";
import { cn } from "@/lib/utils";

type Tab = "learner" | "coach";
type Status = "idle" | "error" | "done-learner" | "done-coach";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex h-11 w-full rounded-md border border-border bg-background px-3 text-base text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Signup() {
  const [tab, setTab] = useState<Tab>("learner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState<string>(CITIES[0]);
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [hours, setHours] = useState(1);
  const [kyc, setKyc] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setCity(CITIES[0]);
    setSubject(SUBJECTS[0]);
    setHours(1);
    setKyc(false);
  }

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
    if (tab === "coach" && !kyc) {
      setStatus("error");
      setMessage("برای ورود به صف ارجاع، احراز هویت الزامی است.");
      return;
    }
    try {
      if (tab === "learner") {
        saveRequest({ name: trimmedName, email: trimmedEmail, city, subject, hours });
        setStatus("done-learner");
      } else {
        saveCoach({ name: trimmedName, email: trimmedEmail, city, subject });
        setStatus("done-coach");
      }
    } catch {
      setStatus("error");
      setMessage("ثبت انجام نشد. دوباره تلاش کنید.");
      return;
    }
    setMessage("");
    resetForm();
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
            <p className="text-xs font-medium tracking-wide text-ink-foreground/70">۰۷ — درخواست</p>
            <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight">
              شاگرد بخواهد. مربی بپذیرد. کیش ارجاع دهد.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
              نرخ {PAYMENT.hourly} {PAYMENT.coin} در ساعت. جلسه پس از احراز مربی و ارجاع{" "}
              {FOUNDER.shortName}.
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
          {status === "done-learner" || status === "done-coach" ? (
            <div className="flex h-full min-h-64 flex-col justify-center">
              <CheckCircle2 className="size-8 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {status === "done-learner" ? "درخواست مربی ثبت شد." : "در صف احراز و ارجاع هستید."}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {status === "done-learner"
                  ? "مربیان احرازشده در شهرهای مختلف می‌توانند اعلام آمادگی کنند. کلاس وقتی شروع می‌شود که پشتیبان کیش ارجاع دهد."
                  : "پس از بررسی احراز هویت، محمود میرکمالی شخصاً ارجاع می‌دهد. تا آن لحظه به درخواست شاگرد وصل نمی‌شوید."}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStatus("idle");
                    setTab(status === "done-learner" ? "coach" : "learner");
                  }}
                >
                  {status === "done-learner" ? "ثبت‌نام مربی" : "درخواست مربی"}
                </Button>
                <Button asChild>
                  <a href="#referral">مشاهده پنل ارجاع</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-1 rounded-md bg-muted p-1">
                <button
                  type="button"
                  className={cn(
                    "flex min-h-11 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150",
                    tab === "learner" ? "bg-surface text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground",
                  )}
                  onClick={() => {
                    setTab("learner");
                    setStatus("idle");
                  }}
                >
                  درخواست مربی
                </button>
                <button
                  type="button"
                  className={cn(
                    "flex min-h-11 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150",
                    tab === "coach" ? "bg-surface text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground",
                  )}
                  onClick={() => {
                    setTab("coach");
                    setStatus("idle");
                  }}
                >
                  مربی می‌شوم
                </button>
              </div>

              <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5" noValidate>
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
                  <Label htmlFor="email">ایمیل</Label>
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
                    placeholder="you@email.com"
                  />
                </div>
                <SelectField id="city" label="شهر" value={city} onChange={setCity} options={CITIES} />
                <SelectField
                  id="subject"
                  label={tab === "learner" ? "موضوع کلاس" : "حوزه تدریس"}
                  value={subject}
                  onChange={setSubject}
                  options={SUBJECTS}
                />
                {tab === "learner" ? (
                  <div className="space-y-2">
                    <Label htmlFor="hours">ساعت مورد نیاز</Label>
                    <Input
                      id="hours"
                      name="hours"
                      type="number"
                      min={1}
                      max={40}
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value) || 1)}
                    />
                    <p className="text-xs text-muted-foreground">
                      جمع: {hours * PAYMENT.hourly} {PAYMENT.ticker} · مربی {hours * PAYMENT.coach}
                    </p>
                  </div>
                ) : (
                  <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border bg-background px-3 py-3 text-sm">
                    <input
                      type="checkbox"
                      checked={kyc}
                      onChange={(e) => setKyc(e.target.checked)}
                      className="mt-0.5 size-4 accent-primary"
                    />
                    <span>
                      احراز هویت را می‌پذیرم. بدون تأیید مدارک و ارجاع پشتیبان کیش به شاگرد وصل نمی‌شوم.
                    </span>
                  </label>
                )}
                {status === "error" ? (
                  <p className="text-sm text-primary" role="alert">
                    {message}
                  </p>
                ) : null}
                <Button type="submit" size="lg" className="w-full">
                  {tab === "learner" ? "ثبت درخواست مربی" : "ارسال برای احراز و ارجاع"}
                  <ArrowLeft />
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
