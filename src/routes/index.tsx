import { createFileRoute } from "@tanstack/react-router";
import { Economy } from "@/components/landing/economy";
import { Features } from "@/components/landing/features";
import { SiteFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Instructor } from "@/components/landing/instructor";
import { MobileCta } from "@/components/landing/mobile-cta";
import { SiteNav } from "@/components/landing/nav";
import { Pricing } from "@/components/landing/pricing";
import { Referral } from "@/components/landing/referral";
import { Signup } from "@/components/landing/signup";
import { Stories } from "@/components/landing/stories";
import { Value } from "@/components/landing/value";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-background pb-20 md:pb-0">
      <a
        href="#instructor"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        پرش به محتوا
      </a>
      <SiteNav />
      <main>
        <Hero />
        <Instructor />
        <Value />
        <Features />
        <Pricing />
        <Economy />
        <Stories />
        <Signup />
        <Referral />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
