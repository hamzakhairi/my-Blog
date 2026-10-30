
import {
  codeToTokens,
  bundledLanguages,
  type BundledLanguage,
} from "shiki";

import { CopyButton } from "./copy-button";

type CodeBlockProps = {
  code: string;
  language?: string;
  output?: string;
};

async function HighlightedCode({
  code,
  language = "text",
}: {
  code: string;
  language?: string;
}) {
  const lang: BundledLanguage | "text" =
    language in bundledLanguages
      ? (language as BundledLanguage)
      : "text";

  const result = await codeToTokens(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
      <code>
        {result.tokens.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((token, tokenIndex) => (
              <span
                key={tokenIndex}
                style={{ color: token.color }}
              >
                {token.content}
              </span>
            ))}
          </span>
        ))}
      </code>
    </pre>
  );
}


export async function CodeBlock({
  code,
  language = "bash",
  output,
}: CodeBlockProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden border border-border bg-black">
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {language}
          </span>

          <CopyButton code={code} />
        </div>

        <HighlightedCode
          code={code}
          language={language}
        />
      </div>

      {output && (
        <div className="overflow-hidden border border-border bg-black">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">
              output
            </span>

            <CopyButton code={output} />
          </div>

          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-muted-foreground">
            <code>{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}