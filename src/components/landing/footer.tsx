import { Logo } from "@/components/landing/logo";
import { FOUNDER, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            شبکه مربی آنلاین با پشتیبان شهر کیش. هر ساعت ۵ دوتو روی دات‌وان (Chain ID 505) توکنیزه
            می‌شود: ۴ مربی، ۰٫۵ کیش، ۰٫۵ شبکه.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">صفحه</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">ارتباط</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>پشتیبان شهر {FOUNDER.city}</li>
            <li>
              <a href={`mailto:${FOUNDER.email}`} className="hover:text-foreground" dir="ltr">
                {FOUNDER.email}
              </a>
            </li>
            <li>
              <a href={`tel:${FOUNDER.phone}`} className="hover:text-foreground">
                {FOUNDER.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © ۱۴۰۵ آتیسا · {FOUNDER.name} · معلم و پشتیبان شهر کیش
        </p>
      </div>
    </footer>
  );
}
