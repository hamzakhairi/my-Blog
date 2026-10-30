import { Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CrewCallout() {
  return (
    <aside className="flex items-center gap-10 border border-border bg-card px-10 py-9">
      <Syringe className="size-14 shrink-0 -rotate-[25deg] text-brand" />
      <div className="flex-1">
        <h3 className="text-xl font-bold">full chain in the internal writeup</h3>
        <p className="mt-3 max-w-[420px] leading-8 text-muted-foreground">
          privesc, hardening notes and the raw evidence pack live in the team doc. crew only.
        </p>
      </div>
      <Button  className="h-11 rounded-none px-6 font-bold">
        <a href="https://discord.gg/your-invite">open in discord</a>
      </Button>
    </aside>
  );
}
