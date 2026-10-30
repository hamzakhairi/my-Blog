export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-14">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-mono text-sm font-semibold text-foreground">
              SpiderSec
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Practical cybersecurity writeups, penetration testing,
              and security research.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-3">
              <p className="font-mono text-xs text-foreground">
                EXPLORE
              </p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="/blog" className="hover:text-foreground">
                  Blog
                </a>
                <a href="/about" className="hover:text-foreground">
                  About
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs text-foreground">
                SOCIAL
              </p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="YOUR_YOUTUBE_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  YouTube
                </a>

                <a
                  href="YOUR_GITHUB_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SpiderSec</p>
          <p className="font-mono">BUILD. BREAK. LEARN.</p>
        </div>
      </div>
    </footer>
  );
}