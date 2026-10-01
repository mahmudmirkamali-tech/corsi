import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("signup");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry?.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 md:hidden",
        "transition-transform duration-200 ease-out",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Button asChild className="w-full" size="lg">
        <a href="#signup">درخواست مربی</a>
      </Button>
    </div>
  );
}
