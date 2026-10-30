import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Footer from "@/components/blog/footer";
import Navbar from "@/components/blog/navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spidersec.dev"),
  title: {
    default: "SpiderSec | DevOps & Pentesting",
    template: "%s | SpiderSec",
  },
  description:
    "Practical DevOps, infrastructure engineering, automation, and penetration testing.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" loading="eager" >
      <body className={mono.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="mx-auto max-w-345 ">
            <Navbar />
            {children}
            <div className=" mx-auto px-6 py-20 lg:px-14">
              <div className="overflow-hidden rounded-2xl border  bg-[#cdcfc2]">
                <div className="flex flex-col items-center gap-5 p-6 text-center">
                  <Image
                    src="/20e21f0cc8cb716fc2183ec3e11fcc0c-explore.jpg"
                    alt="SpiderSec"
                    width={202}
                    height={202}
                    className="rounded-xl"
                  />

                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-black">
                      Watch the full walkthroughs
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-black/60">
                      Want to see these machines and labs solved in real time?
                      Check out my YouTube channel for full penetration testing
                      walkthroughs, techniques, and practical cybersecurity content.
                    </p>
                  </div>

                  <a
                    href="YOUR_YOUTUBE_CHANNEL_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 font-mono text-xs text-white transition-transform hover:-translate-y-0.5"
                  >
                    WATCH ON YOUTUBE
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
