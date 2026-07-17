import Image from "next/image";
import type { ReactElement } from "react";

const GITHUB = "https://github.com/KybernesisAI/eve-studio";
const DOWNLOAD = "https://github.com/KybernesisAI/eve-studio/releases/latest";
const EVE = "https://eve.dev";

function IconChat({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12Z" />
    </svg>
  );
}
function IconWrench({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M14.5 5.5a4 4 0 0 0-5 5L3 17v4h4l6.5-6.5a4 4 0 0 0 5-5l-2.6 2.6-2.4-.4-.4-2.4 2.4-2.4Z" />
    </svg>
  );
}
function IconRocket({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4.5 16.5c-1.5 1-2 5-2 5s4-.5 5-2c.5-.8.5-2-.5-3s-2.2-.5-2.5 0Z" />
      <path d="M12 15 9 12a11 11 0 0 1 6-8c2.5-1.5 5-1 5-1s.5 2.5-1 5a11 11 0 0 1-8 6Z" />
    </svg>
  );
}
function IconTerminal({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  );
}
function IconBrain({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 3-2.5V6.5A2.5 2.5 0 0 0 9 4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 2.5 2.5 0 0 1-3-2.5" />
    </svg>
  );
}
function IconPlug({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9 2v6M15 2v6" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
      <path d="M12 16v6" />
    </svg>
  );
}

function IconWorkflow({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="4" y="3" width="6" height="5" rx="1" />
      <rect x="14" y="16" width="6" height="5" rx="1" />
      <rect x="4" y="16" width="6" height="5" rx="1" />
      <path d="M7 8v4h10v4M7 12v4" />
    </svg>
  );
}
function IconSparkles({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M18 15l.7 1.9L20.5 17.5l-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.6.7-1.9Z" />
    </svg>
  );
}
function IconScan({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}
function IconLink({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </svg>
  );
}

/** A Vercel-triangle chip: "▲ <label>", like the eve.dev architecture diagram. */
function VercelChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2 py-1 text-[12px] font-medium text-foreground">
      <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" aria-hidden>
        <path d="M12 2 22 20H2L12 2Z" />
      </svg>
      {label}
    </span>
  );
}

function EveCard({
  icon: Icon,
  title,
  desc,
  chip,
}: {
  icon: (p: { className?: string }) => ReactElement;
  title: string;
  desc: string;
  chip?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-center gap-2.5">
        <Icon className="h-5 w-5" />
        <h3 className="text-[15px] font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{desc}</p>
      {chip ? (
        <div className="mt-3">
          <VercelChip label={chip} />
        </div>
      ) : null}
    </div>
  );
}

const CHANNELS = [
  "Slack",
  "Discord",
  "Web Chat",
  "Google Chat",
  "Microsoft Teams",
  "WhatsApp",
  "API",
  "Cron",
  "Twilio",
  "Linear",
  "GitHub",
  "Telegram",
];

const FEATURES = [
  {
    icon: IconSparkles,
    title: "Evolve — self-improving agents",
    body: "Tell an agent to change itself, in chat or over Slack. Studio drafts the skill, tool, schedule, or edit with the agent's own model, shows you a diff, and commits it on approval. The agent stays pure Eve.",
    wide: true,
  },
  {
    icon: IconChat,
    title: "Chat, local & deployed",
    body: "Stream your agent's turns, tool calls, subagent delegations, and approvals. Talk to the local dev server or your production deployment from the same window.",
    wide: true,
  },
  {
    icon: IconWrench,
    title: "Every capability, editable",
    body: "Browse tools, skills, subagents, and hooks — then open, edit, and delete their source in-app. Instructions, model, connections, channels, and schedules too.",
    wide: true,
  },
  {
    icon: IconRocket,
    title: "One-click Vercel deploy",
    body: "Link the project, pull the AI Gateway token, and ship to production without leaving the app. Team picker, env, secrets, and logs included.",
  },
  {
    icon: IconTerminal,
    title: "Terminal-free onboarding",
    body: "Provisions Node, installs Eve, and signs you into Vercel automatically. A non-technical operator never has to open a terminal — ever.",
  },
  {
    icon: IconBrain,
    title: "Long-term memory",
    body: "Connect an Arcana brain in a couple of clicks and your agent remembers across runs — the facts you tell it, and what it did while you were away. Evolve learns from that history too.",
  },
  {
    icon: IconPlug,
    title: "Integrations & channels",
    body: "Wire up connections (MCP, OpenAPI) and channels — Slack, Linear, GitHub, and more — via Vercel Connect. Schedules and evals are a tab away.",
  },
];

const STEPS = [
  { n: "01", t: "Install", d: "Download the signed, notarized app. Opens with no Gatekeeper warning." },
  { n: "02", t: "Create an agent", d: "The app provisions a Node runtime and scaffolds a fresh Eve agent." },
  { n: "03", t: "Connect Vercel", d: "Sign in and link — the AI Gateway token is pulled for you." },
  { n: "04", t: "Chat & ship", d: "Talk to your agent, edit its capabilities, and deploy to production." },
];

function DownloadButton() {
  return (
    <a
      href={DOWNLOAD}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-[14px] font-medium text-white transition-colors hover:bg-foreground/85"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.417 2.2-1.11 2.99-.79.9-2.07 1.59-3.16 1.5-.13-1.09.41-2.24 1.06-2.97.72-.82 2.02-1.44 3.21-1.52ZM20.5 17.2c-.6 1.38-.89 2-1.66 3.22-1.07 1.7-2.58 3.82-4.45 3.83-1.66.02-2.09-1.08-4.35-1.07-2.26.01-2.73 1.09-4.39 1.07-1.87-.02-3.3-1.93-4.37-3.63C-1.06 16.9-.37 9.6 3.68 8.99c1.34-.06 2.28.85 3.13.85.85 0 2.4-1.05 4.05-.9.69.03 2.63.28 3.87 2.1-3.4 2.08-2.86 6.55.9 8.16Z" />
      </svg>
      Download for macOS
    </a>
  );
}

function GitHubButton() {
  return (
    <a
      href={GITHUB}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-white px-5 text-[14px] font-medium text-foreground transition-colors hover:bg-canvas"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
      View on GitHub
    </a>
  );
}

export default function Home() {
  return (
    <div className="font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <Image src="/brand/eve-mark-black.png" alt="Eve" width={2306} height={819} className="h-4 w-auto" />
            <span className="font-spacemono text-[12px] uppercase tracking-[0.2em] text-muted">
              Studio
            </span>
          </a>
          <nav className="flex items-center gap-5 text-[13px]">
            <a href="#evolve" className="hidden text-muted transition-colors hover:text-foreground sm:inline">
              Evolve
            </a>
            <a href="#features" className="hidden text-muted transition-colors hover:text-foreground sm:inline">
              Features
            </a>
            <a href="#how" className="hidden text-muted transition-colors hover:text-foreground sm:inline">
              How it works
            </a>
            <a href="/docs" className="text-muted transition-colors hover:text-foreground">
              Docs
            </a>
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

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-24 text-center sm:pt-32">
          <Image
            src="/brand/eve-mark-black.png"
            alt="Eve"
            width={2306}
            height={819}
            priority
            className="mx-auto mb-10 h-16 w-auto sm:h-20"
          />
          <p className="kicker mb-5">Desktop control center for Eve agents</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Operate every Eve agent —<br className="hidden sm:block" /> without the terminal.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">
            Eve Studio is a native macOS app to run, chat with, build, wire up, and
            deploy your{" "}
            <a href={EVE} className="text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-foreground">
              Eve
            </a>{" "}
            agents. Create an agent, connect Vercel, and go — it provisions
            everything for you.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton />
            <GitHubButton />
          </div>
          <p className="mt-5 font-spacemono text-[10px] uppercase tracking-[0.16em] text-faint">
            macOS · Apple silicon · free &amp; open source
          </p>
        </div>

        {/* Screenshot */}
        <div className="relative mx-auto max-w-5xl px-5 pb-20">
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-canvas px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Image
              src="/shots/chat.png"
              alt="Eve Studio — chatting with an agent"
              width={2884}
              height={1978}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Evolve — the flagship, native to Eve Studio */}
      <section id="evolve" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-canvas text-foreground">
              <IconSparkles className="h-[18px] w-[18px]" />
            </span>
            <p className="kicker">Native to Eve Studio</p>
          </div>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Evolve — agents that improve themselves, with you in the loop.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Tell an agent to change itself — in chat, or over Slack — and Eve
            Studio drafts the change with the agent&apos;s own model, shows you
            the exact diff, and on your approval writes the files and commits
            them to git. Nothing changes without your yes, and the agent stays
            pure Eve.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-canvas p-6">
              <p className="font-spacemono text-[11px] tracking-widest text-faint">
                01
              </p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">
                Say it, anywhere
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Type it in the Evolve tab, say it in chat — Studio detects it —
                or DM the deployed agent on Slack, and it proposes the change
                back to you.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-6">
              <p className="font-spacemono text-[11px] tracking-widest text-faint">
                02
              </p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">
                Review the exact diff
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Studio turns it into a new skill, tool, schedule, an
                instructions edit, or a memory — drafted with the agent&apos;s
                own model. Tweak it, then approve.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-6">
              <p className="font-spacemono text-[11px] tracking-widest text-faint">
                03
              </p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">
                Applied &amp; committed
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                It writes the files and git-commits them — a revert point for
                every change. Restart or deploy to go live.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-muted">
            Works on any Eve agent as it comes — proposals raised from Slack
            queue to your own Vercel project, and Studio sets that up in a
            click. Give the agent an{" "}
            <a
              href="/docs/memory"
              className="text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
            >
              Arcana brain
            </a>{" "}
            and it goes further: it remembers the facts you tell it, and Evolve
            learns from everything it has actually done — including the work it
            did on Slack while you were away.
          </p>

          <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-muted">
            Why in the app? An Eve agent can&apos;t rewrite its own compiled,
            read-only deployment — so Studio authors the change and you approve
            it, and the agent stays base Eve.{" "}
            <a
              href="/docs/evolve"
              className="text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
            >
              How Evolve works →
            </a>
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="kicker mb-3">Everything, in one window</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One app for the whole agent lifecycle.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`rounded-xl border border-border bg-white p-6 ${
                  f.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas text-foreground">
                  <f.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Eve — architecture primer for newcomers */}
      <section id="eve" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="kicker mb-3">New to Eve?</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Built on Eve — the framework for agents.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            An Eve agent is a folder. Eve gives it a durable runtime, tools,
            subagents, and memory — then surfaces it across channels, all managed
            on Vercel. Eve Studio is the app for operating it.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {/* Runtime */}
            <div className="rounded-2xl border border-border bg-canvas p-5 lg:col-span-2">
              <p className="kicker">Runtime</p>
              <p className="mt-1.5 text-[14px] text-muted">
                Durable execution, state persistence, event streaming.
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border bg-white p-5">
                  <div className="flex items-center gap-2.5">
                    <IconWorkflow className="h-5 w-5" />
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      Durable Workflow
                    </h3>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    Checkpointed steps, park between messages, resume on delivery.
                  </p>
                  <div className="mt-3">
                    <VercelChip label="Vercel Workflows" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <EveCard icon={IconSparkles} title="AI SDK" desc="Model calls, streaming." chip="AI Gateway" />
                  <EveCard icon={IconScan} title="Vercel Sandbox SDK" desc="Isolated code execution." chip="Vercel Sandbox" />
                  <EveCard icon={IconLink} title="Connection SDK" desc="MCP / HTTP endpoints." chip="Vercel Connect" />
                  <EveCard icon={IconWrench} title="Tools & Subagents" desc="Typed functions and child agents." />
                </div>
              </div>
            </div>

            {/* Channel */}
            <div className="rounded-2xl border border-border bg-canvas p-5">
              <p className="kicker">Channel</p>
              <p className="mt-1.5 text-[14px] text-muted">
                Where your agent gets surfaced.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <IconChat className="h-5 w-5" />
                  <h3 className="text-[15px] font-semibold tracking-tight">
                    Chat &amp; webhooks
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {CHANNELS.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-border bg-canvas px-2 py-1 text-[12.5px] text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[13.5px] leading-relaxed text-muted">
            Fully managed via Vercel — sandboxes, durable workflows, model routing,
            and observability handled for you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="kicker mb-3">No terminal, ever</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            From download to a deployed agent.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            A first-time user never touches a command line. The app provisions its
            own Node runtime, installs Eve on first use, and walks Vercel sign-in.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-foreground pt-4">
                <div className="font-spacemono text-[13px] text-faint">{s.n}</div>
                <h3 className="mt-2 text-[16px] font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-canvas">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
          <Image src="/brand/eve-mark-black.png" alt="Eve" width={2306} height={819} className="mx-auto mb-8 h-10 w-auto" />
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Ship your agents from one app.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-muted">
            Free and open source. Built on Eve.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton />
            <GitHubButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Image src="/brand/eve-mark-black.png" alt="Eve" width={2306} height={819} className="h-4 w-auto opacity-80" />
            <span className="font-spacemono text-[11px] uppercase tracking-[0.2em] text-faint">
              Studio
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
            <a href="/docs" className="transition-colors hover:text-foreground">Docs</a>
            <a href={GITHUB} className="transition-colors hover:text-foreground">GitHub</a>
            <a href={`${GITHUB}/releases`} className="transition-colors hover:text-foreground">Releases</a>
            <a href={EVE} className="transition-colors hover:text-foreground">Eve</a>
            <a href="https://vercel.com/eve" className="transition-colors hover:text-foreground">Eve on Vercel</a>
          </div>
          <p className="font-spacemono text-[10px] uppercase tracking-[0.14em] text-faint">
            Built on Eve · MIT · Not affiliated with Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
