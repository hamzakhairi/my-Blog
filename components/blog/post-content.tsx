import type { Post } from "@/lib/posts";
import { PostBlockRenderer } from "./post-block";
import { getSectionId } from "@/lib/post-utils";
type Props = {
  post: Post;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}



export function PostContent({ post }: Props) {
  return (
    <article className="space-y-16 text-[17px] leading-8">
      {post.sections.map((section, sectionIndex) => {
        const id =
          section.id ??
          getSectionId(
            post.slug,
            section.title,
            sectionIndex
          );

        return (
          <section
            key={id}
            id={id}
            className="scroll-mt-24 space-y-7"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              {section.title}
            </h2>

            <div className="space-y-7">
              {section.blocks.map((block, blockIndex) => (
                <PostBlockRenderer
                  key={`${id}-${blockIndex}`}
                  block={block}
                />
              ))}
            </div>
          </section>
        );
      })}
    </article>
  );
}