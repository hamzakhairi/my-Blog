import Hero from "@/components/home/hero";
import HexagonGrid from "@/components/home/HexagonGrid";
import Image from "next/image";
// import { redirect } from "next/navigation";

export default function Home() {
  // redirect("/blog/hack-the-box-layover-stats");


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative">
        <div className="flex justify-center lg:justify-end">
          <div className=" absolute  bottom-[-288] right-[-122] scale-x-[-1] ">
            <Image
              src={"/home/siramik.png"}
              alt="Hamza"
              width={500}
              height={600}
              className="h-[1000px] w-[800px]   -rotate-[13deg] object-cover grayscale"
              priority
            />

          </div>
        </div>
      </div>
      <HexagonGrid />
    </main>
  )
}