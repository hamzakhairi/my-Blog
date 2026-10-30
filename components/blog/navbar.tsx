"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Search, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import PostSearch from "./PostSearch";

const links = [
  { href: "/blog-security", label: "Security" },
  // { href: "/blog-devops", label: "DevOps" },
  { href: "/blog-scripts", label: "Scripts" },
  // { href: "/blog-code-challenges", label: "Code" },
  {
    href: "https://youtube.com",
    label: "YouTube",
    external: true,
  },
  {
    href: "https://github.com/hamzakhairi",
    label: "Github",
    external: true,
  },
];

const DISCORD_URL = "https://discord.gg/your-invite";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderThemeIcon = () => {
    if (!mounted) {
      return <Sun className="size-5" />;
    }

    return theme === "dark" ? (
      <Sun className="size-5" />
    ) : (
      <Moon className="size-5" />
    );
  };

  return (
    <header className="flex h-17 items-center border-b border-border/60 px-4 sm:px-6 lg:px-14">
      {/* Logo */}
      <Link
        href="/"
        className="flex shrink-0 items-center gap-3 text-sm font-bold tracking-[0.15em] sm:gap-4"
      >
        <Image
          src="/main.jpg"
          alt="SpiderSec logo"
          width={42}
          height={42}
          priority
          className="border-2 border-primary"
        />

        <span className="hidden sm:inline text-[18px]">SpiderSec / BLOG</span>
        <span className="sm:hidden text-[18px] ">SpiderSec</span>
      </Link>

      {/* Desktop Search */}
      <div className="relative ml-8 hidden w-68 md:block">
        <PostSearch/>
        {/* <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search..."
          aria-label="Search blog"
          className="h-9 rounded-none border-input bg-card pl-10 text-sm "
        /> */}
      </div>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden items-center gap-6 text-sm lg:flex">
        {links.map((link) => {
          const active =
            !link.external && pathname.startsWith(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={
                link.external ? "noopener noreferrer" : undefined
              }
              className={cn(
                "transition-colors hover:text-brand  text-[18px] ",
                active &&
                "text-brand underline decoration-2 underline-offset-8"
              )}
            >
              
              {link.label}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          disabled={!mounted}
          onClick={toggleTheme}
          className="rounded-none"
        >
          {renderThemeIcon()}
        </Button>

        {/* Discord */}
        <Link
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 text-[18px] items-center justify-center rounded-none bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Discord
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className="ml-auto lg:hidden">
        <Sheet>
          <SheetTrigger
            className="inline-flex size-9 items-center justify-center rounded-none transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[min(20rem,85vw)] border-l border-border"
          >
            <SheetHeader className="border-b border-border pb-5">
              <SheetTitle className="flex items-center gap-3 text-sm tracking-[0.15em]">
                <Image
                  src="/main.jpg"
                  alt="SpiderSec logo"
                  width={36}
                  height={36}
                  className="border-2 border-primary"
                />
                SpiderSec
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Search..."
                  aria-label="Search blog"
                  className="h-10 rounded-none pl-10"
                />
              </div>

              {/* Mobile Links */}
              {links.map((link) => {
                const active =
                  !link.external && pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={
                      link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={cn(
                      "border-b border-border/50 px-2 py-3 text-sm transition-colors hover:text-brand",
                      active && "font-medium text-brand"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Bottom Controls */}
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-6">
                <Button
                  type="button"
                  variant="ghost"
                  disabled={!mounted}
                  onClick={toggleTheme}
                  className="rounded-none px-2 text-sm text-muted-foreground hover:text-brand"
                >
                  {renderThemeIcon()}
                  <span>Toggle theme</span>
                </Button>

                <Button
                  
                  className="rounded-none font-bold"
                >
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
