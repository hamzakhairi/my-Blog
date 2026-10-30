import { Search, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import ScriptsCatalog from "./ScriptsCatalog";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import Link from "next/link";
import { GithubIcon } from "@/app/(blogs)/blog-scripts/page";



export default function ContentBlog() {



    return (
        <section className="px-6 py-16 lg:px-14">
            <div className="mx-auto max-w-[1380px] border bg-black p-8 rounded-xl flex justify-between items-center">
                <div className="">
                    <h1 className="font-bold text-3xl text-white" >
                    Built to be read, modified, and reused.
                </h1>
                <p className="text-white text-md mt-2" >All script are open source and avialable on github.</p>
                </div>
                <div className="border  text-primary border-primary rounded-2xl px-10 py-4">
                    <Link href={"https://github.com/hamzakhairi"} className="flex">
                       <GithubIcon className="mr-3"/>  Explore on GitHub
                    </Link>
                </div>

            </div>
            <ScriptsCatalog />
        </section>
    )
}

