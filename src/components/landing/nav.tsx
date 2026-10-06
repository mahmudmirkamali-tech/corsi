import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TokenizeButton } from "@/components/landing/tokenize-button";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onInk = !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,color] duration-200",
        onInk
          ? "border-ink-foreground/10 bg-ink text-ink-foreground"
          : "border-border bg-background/90 text-foreground shadow-[var(--shadow-border)]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo inverted={onInk} />
        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                onInk
                  ? "text-ink-foreground/70 hover:text-ink-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <TokenizeButton size="sm" variant={onInk ? "inverted" : "default"} />
        </div>
        <Button
          variant={onInk ? "inverted" : "outline"}
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className={cn(
            "border-t px-5 py-4 md:hidden",
            onInk ? "border-ink-foreground/10 bg-ink" : "border-border bg-background",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="ناوبری موبایل">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center rounded-md px-3 text-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <TokenizeButton className="mt-2 w-full" variant={onInk ? "inverted" : "default"} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
