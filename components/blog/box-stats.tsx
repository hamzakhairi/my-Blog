
import type { Post } from "@/lib/posts";

type BoxStatsProps = {
  box: NonNullable<Post["box"]>;
};

export function BoxStats({ box }: BoxStatsProps) {
  const cells = [
    ["OS", box.os],
    ["DIFFICULTY", box.difficulty],
    ["POINTS", `${box.points} pts`],
    ["RELEASED", box.released],
  ];

  return (
    <dl className="grid grid-cols-2 divide-x divide-border border border-border bg-card md:grid-cols-4">
      {cells.map(([k, v]) => (
        <div key={k} className="px-6 py-6">
          <dt className="mb-3 text-xs tracking-[0.25em] text-muted-foreground">
            {k}
          </dt>
          <dd className="text-2xl font-bold">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
