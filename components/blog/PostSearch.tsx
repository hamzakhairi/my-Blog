"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import posts from "@/app-content/security/index.json";

export default function PostSearch() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="relative">
                <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />

                <Input
                    readOnly
                    aria-label="Open blog search"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    placeholder="Search posts..."
                    className="cursor-pointer pl-9"
                    onClick={() => setOpen(true)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setOpen(true);
                        }
                    }}
                />
            </div>

            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                title="Search posts"
                description="Search blog posts by slug."
            >
                <Command>
                    <CommandInput placeholder="Search by slug..." />

                    <CommandList>
                        <CommandEmpty>No posts found.</CommandEmpty>

                        {posts.map((post) => (
                            <CommandItem
                                key={post.slug}
                                value={post.slug}
                                onSelect={() => {
                                    setOpen(false);
                                    router.push(
                                        `/blog-security/${encodeURIComponent(post.slug)}`
                                    );
                                }}
                                className="cursor-pointer m-1"
                            >
                                <div>
                                    <p className="font-medium">{post.title}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {post.slug}
                                    </p>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    );
}