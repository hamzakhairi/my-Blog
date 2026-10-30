"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import ScriptCard from "./scriptCard";
import { Scripts } from "@/lib/script/postScript";

const languages = [
  { value: "python", label: "Python" },
  { value: "bash", label: "Bash" },
  { value: "c", label: "C" },
];

export default function ScriptsCatalog() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("updated");

  function toggleLanguage(language: string) {
    setSelectedLanguages((current) =>
      current.includes(language)
        ? current.filter((item) => item !== language)
        : [...current, language]
    );
  }

  const filteredScripts = Scripts.filter(
    (script) =>
      selectedLanguages.length === 0 ||
      selectedLanguages.includes(script.category)
  ).sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }

    return b.updatedAt.localeCompare(a.updatedAt);
  });

  return (
    <section className="mx-auto my-10">
      <div className="grid items-start gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="rounded-lg border border-border p-5 md:sticky md:top-24">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-wide">
              Language
            </h2>
            <ChevronDown aria-hidden="true" className="size-4" />
          </div>

          <div className="mt-5 space-y-4">
            {languages.map((language) => (
              <label
                key={language.value}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  name="language"
                  value={language.value}
                  checked={selectedLanguages.includes(language.value)}
                  onChange={() => toggleLanguage(language.value)}
                  className="size-4 accent-lime-600"
                />

                <span>{language.label}</span>

                <span className="ml-auto text-muted-foreground">
                  {
                    Scripts.filter(
                      (script) => script.category === language.value
                    ).length
                  }
                </span>
              </label>
            ))}
          </div>

          <div className="my-6 border-t border-border" />

          <label
            htmlFor="script-sort"
            className="text-xs font-medium uppercase tracking-wide"
          >
            Sort by
          </label>

          <div className="relative mt-4">
            <select
              id="script-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-10 w-full appearance-none rounded-md border border-input bg-background pl-3 pr-9 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="updated">Recently updated</option>
              <option value="name">Name: A–Z</option>
            </select>

            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </aside>

        <div className="grid min-w-0 gap-5 lg:grid-cols-2">
          {filteredScripts.length > 0 ? (
            filteredScripts.map((script) => (
              <ScriptCard key={script.slug} script={script} />
            ))
          ) : (
            <p className="text-sm text-muted-foreground lg:col-span-2">
              No scripts found for the selected languages.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}