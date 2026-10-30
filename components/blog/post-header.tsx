import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Post } from "@/lib/posts";

export function PostHeader({ post }: { post: Post }) {
  const { box } = post;
  return (
    <header className="relative  ">
      {/* faint syringe watermark behind the header */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute -right-0 -top-8
          h-[300px] w-[560px]
          bg-[url('/30aa99e07fb9afbb5e27d48622e0f2ca.png')]
          dark:bg-[url('/30aa99e07fb9afbb5e27d48622e0f2cad.png')]
          bg-contain
          bg-right-top
          bg-no-repeat
          opacity-85
        "
      />
      {/* <div
        aria-hidden
        className=" pointer-events-none absolute -right-10 bg-green-400/25 blur-[100px]  -top-8 h-[300px] w-[560px] 
        bg-[url('/30aa99e07fb9afbb5e27d48622e0f2ca.png')] bg-contain bg-right-top bg-no-repeat opacity-85"
      /> */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-8 h-75 w-140 rounded-full bg-green-400/25 blur-[100px]"
      /> */}
      <div className="relative flex flex-wrap items-center gap-3 text-xs tracking-[0.2em]">
        <Badge className="rounded-none bg-notes px-3 py-1.5 text-xs font-bold tracking-[0.2em] text-black hover:bg-notes">
          {post.category}
        </Badge>
        {/* <span className="border border-border px-4 py-1.5 text-muted-foreground">
          {box.os.toUpperCase()} · {box.difficulty.toUpperCase()} · {box.points} PTS · {box.released}
        </span> */}
        {box && (
  <span className="border border-border px-4 py-1.5 text-muted-foreground">
    {box.os.toUpperCase()} · {box.difficulty.toUpperCase()} · {box.points} PTS · {box.released}
  </span>
)}
        <span className="text-muted-foreground/70">
          {post.date} · {post.readTime}
        </span>
      </div>

      <h1 className="relative mt-8 text-[64px] font-bold leading-[1.08] tracking-tight">
        {post.title}
      </h1>
      <p className="relative mt-8 max-w-[880px] text-xl leading-[1.9] text-muted-foreground">
        {post.description}
      </p>

      <Separator className="my-9" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid border-primary bg-secondary size-12 -rotate-3 place-items-center border-2 border-brand/70 bg-brand/10 text-base font-bold text-brand">
            {post.author.initials}
          </span>
          <span className="text-lg font-bold">{post.author.name}</span>
        </div>
        <ul className="flex flex-wrap gap-3">
          {post.tags.map((t) => (
            <li key={t} className="bg-muted px-4 py-3 text-sm tracking-wider text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
