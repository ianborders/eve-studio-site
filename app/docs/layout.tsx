import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DocsSidebar } from "./DocsSidebar";

const GITHUB = "https://github.com/KybernesisAI/eve-studio";
const DOWNLOAD = "https://github.com/KybernesisAI/eve-studio/releases/latest";

export const metadata: Metadata = {
  title: "Docs — Eve Studio",
  description:
    "Documentation for Eve Studio: install, create and operate Eve agents, and every Eve concept — tools, skills, subagents, hooks, connections, channels, memory, and deploy.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/brand/eve-mark-black.png" alt="Eve" width={2306} height={819} className="h-4 w-auto" />
            <span className="font-spacemono text-[12px] uppercase tracking-[0.2em] text-muted">
              Studio
            </span>
            <span className="ml-1 rounded border border-border bg-canvas px-1.5 py-0.5 font-spacemono text-[10px] uppercase tracking-wider text-faint">
              Docs
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-[13px]">
            <Link href="/" className="text-muted transition-colors hover:text-foreground">
              Home
            </Link>
            <a href={GITHUB} className="text-muted transition-colors hover:text-foreground">
              GitHub
            </a>
            <a
              href={DOWNLOAD}
              className="inline-flex h-8 items-center rounded-md bg-foreground px-3 text-[13px] font-medium text-white transition-colors hover:bg-foreground/85"
            >
              Download
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-10 px-5">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-10 pr-2">
            <DocsSidebar />
          </div>
        </aside>
        <main className="min-w-0 flex-1 py-12">
          <article className="prose prose-neutral max-w-2xl prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-[34px] prose-h2:mt-12 prose-h2:text-[22px] prose-h3:text-[17px] prose-p:text-[15px] prose-p:leading-relaxed prose-li:text-[15px] prose-a:font-normal prose-a:text-foreground prose-a:underline prose-a:decoration-border-strong prose-a:underline-offset-4 hover:prose-a:decoration-foreground prose-strong:font-semibold prose-pre:rounded-xl prose-pre:border prose-pre:border-[#2a2a2a] prose-pre:bg-[#0a0a0a] prose-pre:text-[13px]">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
