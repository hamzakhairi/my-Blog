"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type HexItem = { label: string; href?: string };

type Props = {
    items?: HexItem[];
    perRow?: number;
    size?: number;
    gap?: number;
    className?: string;
};

const defaultItems: HexItem[] = [
    { label: "SECURITY", href: "/blog-security" },
    { label: "DEV-OPS", href: "/blog-devops" },
    { label: "SCRIPTS", href: "/labs?category=scripts" },
    { label: "CODE CHALLENGES", href: "/labs?category=code" },
];

const POINTS = "50,2 98,29 98,86 50,113.5 2,86 2,29";


function Hex({ label, href, size }: HexItem & { size: number }) {
    const inner = (
        <>
            <svg
                viewBox="0 0 100 115.47"
                className="absolute inset-0 size-full overflow-visible"
                aria-hidden
            >
                <polygon
                    points={POINTS}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    className="fill-transparent stroke-foreground transition-colors group-hover:fill-brand/15 group-hover:stroke-brand"
                />
            </svg>

            <span
                className="relative max-w-[72%] text-balance break-words text-center font-bold leading-tight transition-colors group-hover:text-brand"
                style={{ fontSize: Math.max(12, size * 0.08) }}
            >
                {label}
            </span>
        </>
    );

    const cls = "group relative flex shrink-0 items-center justify-center";
    const style = { width: size, height: size * 1.1547 };

    return href ? (
        <Link href={href} className={cls} style={style}>
            {inner}
        </Link>
    ) : (
        <div className={cls} style={style}>
            {inner}
        </div>
    );
}

function Honeycomb({
    items,
    perRow,
    size,
    gap,
    className,
}: Required<Omit<Props, "className">> & { className?: string }) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(640);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const update = () => setWidth(el.getBoundingClientRect().width);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const available = Math.max(width - 32 - perRow * gap, 120);
    const hexSize = Math.floor(Math.min(size, available / (perRow + 0.75)));
    const hexHeight = hexSize * 1.1547;

    const rows: HexItem[][] = [];
    for (let i = 0; i < items.length; i += perRow) {
        rows.push(items.slice(i, i + perRow));
    }

    return (
        <div ref={wrapRef} className="w-full overflow-x-clip">
            <div
                className={cn(
                    "relative mx-auto my-20 flex w-fit flex-col items-center rotate-[9deg] lg:my-40",
                    className
                )}
            >
                {rows.map((row, r) => (
                    <div
                        key={r}
                        className="flex"
                        style={{
                            gap,
                            marginTop: r === 0 ? 0 : -hexHeight / 4 + gap,
                            transform:
                                r % 2
                                    ? `translateX(${(hexSize + gap) / 2}px)`
                                    : undefined,
                        }}
                    >
                        {row.map((item) => (
                            <Hex key={item.label} {...item} size={hexSize} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function MobileList({ items }: { items: HexItem[] }) {
    return (
        <ul className="mx-auto my-8 flex w-full max-w-md flex-col gap-3 px-4">
            {items.map(({ label, href }) => {
                const content = (
                    <>
                        <span className="text-lg font-bold tracking-wide">
                            {label}
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </>
                );

                const cls =
                    "group flex min-h-16 items-center justify-between rounded-2xl border-2 border-foreground px-5 py-4 transition-colors hover:border-brand hover:bg-brand/15 hover:text-brand active:bg-brand/15";

                return (
                    <li key={label}>
                        {href ? (
                            <Link href={href} className={cls}>
                                {content}
                            </Link>
                        ) : (
                            <div className={cls}>{content}</div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default function HexagonGrid({
    items = defaultItems,
    perRow = 2,
    size = 300,
    gap = 8,
    className,
}: Props) {
    return (
        <>
            {/* < 640px */}
            <div className="sm:hidden">
                <MobileList items={items} />
            </div>

            {/* >= 640px */}
            <div className="hidden sm:block">
                <Honeycomb
                    items={items}
                    perRow={perRow}
                    size={size}
                    gap={gap}
                    className={className}
                />
            </div>
        </>
    );
}
