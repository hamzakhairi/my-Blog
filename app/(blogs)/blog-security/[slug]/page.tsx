import { Share } from "@/components/blog/share";
import { Toc } from "@/components/blog/toc";
import type { Post as PostContentSecurty } from "@/lib/posts";
import { notFound } from "next/navigation";
import { PostHeader } from "@/components/blog/post-header";
import { PostCover } from "@/components/blog/post-cover";
import { BoxStats } from "@/components/blog/box-stats";
import { CrewCallout } from "@/components/blog/crew-callout";
import { PostContent } from "@/components/blog/post-content";


type Props = {
    params: Promise<{ slug: string }>;
};

export async function getPostContent(
    slug: string
): Promise<PostContentSecurty | null> {
    try {
        const content = await import(
            `@/app-content/security/${slug}/index.json`
        );

        return content.default as PostContentSecurty;
    } catch {
        return null;
    }
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostContent(slug);

    if (!post) {
        notFound();
    }

    const toc = post.sections.map((section, index) => ({
        id:
            section.id ??
            `${post.slug}-${slugify(section.title)}-${index}`,
        label: section.title,
    }));

    return (
        <div className="grid grid-cols-1 gap-10 px-14 lg:grid-cols-[320px_minmax(0,1fr)] ">
            <aside className="hidden lg:block">
                <div className="sticky top-16 space-y-16 pt-[140px]">
                    <Toc items={toc} />
                    <Share title={post.title} />
                </div>
            </aside>
            <main className="min-w-0 border-t-4 border-border/80 pt-16 lg:mt-14">
                <div className="mx-auto max-w-[1060px] pb-24 pl-4">
                    <PostHeader post={post} />

                    <div className="mt-10 border-t border-border" />

                    <div className="mt-10 space-y-10">
                        {post.cover && (
                            <PostCover src={post.cover} alt={post.title} />
                        )}

                        {post.box && <BoxStats box={post.box} />}

                        <CrewCallout />

                        <PostContent post={post} />
                    </div>
                </div>
            </main>
        </div>
    )
}

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

