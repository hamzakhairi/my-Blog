import Link from "next/link";
import { Post } from "@/lib/posts";
import content from "@/app-content/security/index.json";

const POSTS_PER_PAGE = 6;

// type BlogPageProps = {
//   searchParams: Promise<{
//     page?: string;
//   }>;
// };

// {
//   searchParams,
// }: BlogPageProp

export default async function BlogPage() {
  // const params = await searchParams;

  // params.page
  const currentPage = Math.max(
    1,
    Number.parseInt("1", 10) || 1
  );

  const posts = content as Post[];

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const page = Math.min(currentPage, Math.max(totalPages, 1));

  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main>
      {/* Header */}
      <section className="border-b border-border px-6 py-20 lg:px-14">
        <div className="mx-auto max-w-[1380px]   flex justify-between items-center ">
          <div className="">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted-foreground">
              / BLOG / SECURTY
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Security writeups
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              HTB machines, PortSwigger labs, TryHackMe rooms, and practical
              security research.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 py-16 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-sm text-muted-foreground">
              {posts.length} writeups
            </p>

            <p className="font-mono text-xs text-muted-foreground">
              PAGE {page} / {totalPages}
            </p>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog-security/${post.slug}`}
                  className="group bg-background p-6 transition-colors hover:bg-muted"
                >
                  {/* Category */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-brand">
                      {post.category}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl text-primary font-semibold tracking-tight transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {post.date}
                    </span>

                    <span className="font-mono text-xs transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-border p-16 text-center">
              <p className="font-mono text-sm text-muted-foreground">
                No writeups found.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {page > 1 ? (
                <Link
                  href={`/blog?page=${page - 1}`}
                  className="border border-border px-4 py-2 font-mono text-xs transition-colors hover:bg-muted"
                >
                  ← PREV
                </Link>
              ) : (
                <span className="border border-border px-4 py-2 font-mono text-xs text-muted-foreground/40">
                  ← PREV
                </span>
              )}

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <Link
                      key={pageNumber}
                      href={`/blog?page=${pageNumber}`}
                      className={[
                        "flex h-9 w-9 items-center justify-center border font-mono text-xs",
                        pageNumber === page
                          ? "border-brand bg-brand text-background border-primary text-primary"
                          : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
                      ].join(" ")}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}
              </div>

              {page < totalPages ? (
                <Link
                  href={`/blog?page=${page + 1}`}
                  className="border border-border px-4 py-2 font-mono text-xs transition-colors hover:bg-muted"
                >
                  NEXT →
                </Link>
              ) : (
                <span className="border border-border px-4 py-2 font-mono text-xs text-muted-foreground/40">
                  NEXT →
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}