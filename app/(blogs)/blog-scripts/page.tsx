import ContentBlog from "@/components/script/ContentBlog";
import { GitBranch, GitBranchPlus, GitCommit, MoveUpRight } from "lucide-react";
import Link from "next/link";

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></g>
  </svg>
);

export default function SrciptPage() {


    return (
        <main>
            <section className="border-b border-border px-6 py-20 lg:px-14">
                <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-12">
                    <div>
                        <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted-foreground">
                            / TOOLBOX / OPEN SOURCE
                        </p>

                        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                            Small script. <br/> Real problemes solved. 
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                            Security tools, offensive scripts, automation, and small
                            utilities I build to explore, test, break, and automate systems.
                        </p>

                        <Link className="font-bold flex pt-5 flex items-center"
                         href={"https://github.com/hamzakhairi"} target="_blank" >
                            <span className="border-2 p-1 flex items-center mr-3
                             justify-center border-black dark:border-white rounded-full ">
                                <GithubIcon />
                            </span>
                             github.com/hamzakhairi 

                             <MoveUpRight className="mx-2 size-4 "/>
                        </Link>
                    </div>


                </div>
            </section>


            <ContentBlog/>
        </main>
    )
}



