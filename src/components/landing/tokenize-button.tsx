import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { tokenizeNow } from "@/lib/store";

export function TokenizeButton({
  size = "lg",
  variant = "default",
  className,
}: Pick<ButtonProps, "size" | "variant" | "className">) {
  const [label, setLabel] = useState("تسویه و توکنیزه");
  const [busy, setBusy] = useState(false);

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={className}
      disabled={busy}
      onClick={() => {
        setBusy(true);
        try {
          const session = tokenizeNow();
          setLabel(`ضرب شد · ${session.tokenId}`);
          document.getElementById("doto")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          setLabel(error instanceof Error ? error.message : "تسویه انجام نشد");
        } finally {
          setBusy(false);
        }
      }}
    >
      {label}
      <ArrowLeft />
    </Button>
  );
}
