"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = {
  id: string;
  label: string;
};

export function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    if (!items.length) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const handleScroll = () => {
      const offset = 140;

      let current = elements[0];

      for (const element of elements) {
        const top = element.getBoundingClientRect().top;

        if (top <= offset) {
          current = element;
        } else {
          break;
        }
      }

      setActive(current.id);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div>
      <p className="mb-9 text-xs tracking-[0.25em] text-muted-foreground">
        ON THIS PAGE
      </p>

      <ul className="border-l-2 border-primary">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-0.5 block border-l-2 border-transparent px-5 py-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground",
                active === item.id &&
                  "border-brand bg-muted text-brand"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// export function Toc({ items }: { items: { id: string; label: string }[] }) {
//   const [active, setActive] = useState(items[0]?.id);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
//       { rootMargin: "-20% 0px -70% 0px" }
//     );
//     items.forEach((i) => {
//       const el = document.getElementById(i.id);
//       if (el) obs.observe(el);
//     });
//     return () => obs.disconnect();
//   }, [items]);

//   return (
//     <div>
//       <p className="mb-9 text-xs tracking-[0.25em] text-muted-foreground">ON THIS PAGE</p>
//       <ul className="border-l-2  border-primary ">
//         {items.map((i) => (
//           <li key={i.id}>
//             <a
//               href={`#${i.id}`}
//               className={cn(
//                 "-ml-0.5 block border-l-2 border-transparent px-5 py-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground",
//                 active === i.id && "border-brand text-brand bg-muted"
//               )}
//             >
//               {i.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
