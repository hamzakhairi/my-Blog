"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-6 py-20 lg:px-14 lg:py-32 ">
            <div className="mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-2">
                {/* Left */}
                <div>
                    <p className="mb-6 font-mono text-lg  text-muted-foreground">
                        / HELLO, I'M HAMZA
                    </p>

                    <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                        Building{" "}
                        <span className="text-muted-foreground">infrastructure</span>
                        <br />
                        testing its limits
                        <br />
                        through <span className="text-muted-foreground">offensive security</span>
                    </h1>

                    <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
                        <span className="border border-border px-3 py-2">
                            PENTESTING
                        </span>

                        <span className="border border-border px-3 py-2">
                            DEVOPS
                        </span>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="/blog"
                            className="border border-foreground bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-80"
                        >
                            READ MY WRITEUPS →
                        </a>

                        <a
                            href="YOUR_YOUTUBE_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-border px-5 py-3 text-sm transition-colors hover:bg-muted"
                        >
                            YOUTUBE ↗
                        </a>
                    </div>
                </div>

                {/* Right */}
                
            </div>
        </section>
    );
}