"use client";

import { useState } from "react";

type Props = {
  code: string;
};

export function CopyButton({ code }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}