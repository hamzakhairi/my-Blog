import { GithubIcon } from "@/app/(blogs)/blog-scripts/page";
import { Script } from "@/lib/script/postScript";
import {
    ArrowUpRight,
    ChevronDown,
    Code2,
    //   Github,
    Terminal,
} from "lucide-react";

type Props = {
    script: Script
}


export default function ScriptCard({ script }: Props) {

    return (
        <article className="flex flex-col rounded-lg border hover:border-lime-600/70 text-card-foreground
                group bg-background p-6 transition-colors hover:bg-muted">
            <div className="flex items-center gap-3">
                <Code2 aria-hidden="true" className="size-5" />
                <span className="text-sm text-muted-foreground">{script.category}</span>
                {script.featured ?
                    <span className="ml-auto rounded-md bg-lime-500/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-lime-700 dark:text-lime-400">

                        Featured
                    </span> :
                    <></>}
            </div>

            <h3 className="mt-5 font-serif text-2xl font-semibold">
                {script.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {script.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {
                    script.tags.map((item, index)=>(

                    <span key={index} className="rounded-sm border px-2 py-1 text-xs text-muted-foreground">
                        {item}
                    </span>
                    ))
                }
            </div>

            <div className="mt-auto pt-6">
                <div className="flex items-center justify-between border-t pt-4">
                    <a
                        href={script.github}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-lime-600"
                    >
                        View script
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>

                    <a
                        href={script.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View NetWatch on GitHub"
                        className="border-l pl-6 pr-4 transition-colors hover:text-lime-600"
                    >
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </article>
    )
}

