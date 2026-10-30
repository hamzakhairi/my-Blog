import Image from "next/image";
import type { PostBlock } from "@/lib/posts";
import { CodeBlock } from "./code-block";

type Props = {
  block: PostBlock;
};

export function PostBlockRenderer({ block }: Props) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-muted-foreground">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h3 className="pt-4 text-xl font-semibold tracking-tight">
          {block.text}
        </h3>
      );

    case "image":
      return (
        <figure className="space-y-3">
          <div className="overflow-hidden border border-border">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={750}
              className="h-auto w-full"
            />
          </div>

          {block.caption && (
            <figcaption className="text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "command":
      return (
        // <div className="space-y-3">
        //   <pre className="overflow-x-auto border border-border bg-muted p-5 font-mono text-sm">
        //     <code>{block.command}</code>
        //   </pre>

        //   {block.output && (
        //     <pre className="overflow-x-auto border border-border p-5 font-mono text-sm text-muted-foreground">
        //       <code>{block.output}</code>
        //     </pre>
        //   )}
        // </div>
        <CodeBlock
      code={block.command}
      language="bash"
      output={block.output}
    />
      );

    case "code":
      return (
        <div className="overflow-hidden border border-border">
          {block.filename && (
            <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
              {block.filename}
            </div>
          )}

          <pre className="overflow-x-auto p-5 font-mono text-sm">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="list-decimal space-y-2 pl-6">
            {block.items.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ol>
        );
      }

      return (
        <ul className="list-disc space-y-2 pl-6">
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      );

    case "note":
      return (
        <aside className="border-l-2 border-border pl-5">
          {block.title && (
            <p className="mb-1 font-semibold">
              {block.title}
            </p>
          )}

          <p className="text-muted-foreground">
            {block.text}
          </p>
        </aside>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-border pl-5 italic text-muted-foreground">
          {block.text}
        </blockquote>
      );

    default:
      return null;
  }
}