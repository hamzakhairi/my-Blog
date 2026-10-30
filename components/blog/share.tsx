"use client";

import { useState } from "react";

export function Share({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const postToX = () =>
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );

  const item = "block text-left text-[15px] text-muted-foreground hover:text-brand";

  return (
    <div className="border-t border-border pt-10">
      <p className="mb-8 text-xs tracking-[0.25em] text-muted-foreground">SHARE</p>
      <div className="space-y-4">
        <button onClick={copy} className={item}>{copied ? "copied!" : "copy link"}</button>
        <button onClick={postToX} className={item}>post to x</button>
        <a className={item} target="_blank" href="https://discord.gg/your-invite">
          discuss in discord
        </a>
      </div>
    </div>
  );
}
