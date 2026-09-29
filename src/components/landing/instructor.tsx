import { CREDENTIALS, FOUNDER, LANGUAGES } from "@/lib/site";

export function Instructor() {
  return (
    <section id="instructor" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">۰۰ — مدرس</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          یک کرسی، با چهره و سابقه واقعی.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          متخصص دیجیتال مارکتینگ و توسعه وب؛ مدرس مهارت در هوش مصنوعی، بلاک‌چین و فناوری‌های نوین
          اطلاعاتی. دقیق، نتیجه‌محور، و متمرکز روی اجرای پروژه در فضای کسب‌وکار ایران.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            <img
              src="/media/portrait-cafe.jpg"
              alt={`${FOUNDER.name} در جلسه کاری`}
              className="aspect-square w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
            />
            <img
              src="/media/portrait-street.jpg"
              alt={`${FOUNDER.name}`}
              className="aspect-square w-full rounded-xl object-cover object-top outline outline-1 -outline-offset-1 outline-foreground/10"
            />
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-7 lg:p-8">
            <div>
              <h3 className="text-xl font-semibold">{FOUNDER.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{FOUNDER.headline}</p>
              <ul className="mt-6 space-y-3">
                {CREDENTIALS.map((item) => (
                  <li key={item} className="border-r-2 border-primary pr-3 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {LANGUAGES.map((lang) => (
                <div key={lang.name}>
                  <dt className="text-xs text-muted-foreground">{lang.level}</dt>
                  <dd className="mt-1 text-sm font-medium">{lang.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="mt-4 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img
            src="/media/credential.jpg"
            alt={`گواهینامه پایان دوره مهارتی ${FOUNDER.name}، ${FOUNDER.university}`}
            className="w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
          />
          <figcaption className="px-5 py-4 text-sm text-muted-foreground">
            گواهینامه پایان دوره مهارتی · {FOUNDER.role} · {FOUNDER.university}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
