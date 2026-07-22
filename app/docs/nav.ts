export interface DocLink {
  title: string;
  href: string;
}
export interface DocGroup {
  group: string;
  items: DocLink[];
}

export const DOCS_NAV: DocGroup[] = [
  {
    group: "Getting started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Install & setup", href: "/docs/setup" },
      { title: "Create an agent", href: "/docs/create-agent" },
      { title: "Connect to Vercel", href: "/docs/connect-vercel" },
    ],
  },
  {
    group: "The app",
    items: [
      { title: "The workspace", href: "/docs/workspace" },
      { title: "Chat", href: "/docs/chat" },
    ],
  },
  {
    group: "Evolve",
    items: [{ title: "Evolve", href: "/docs/evolve" }],
  },
  {
    group: "Eve concepts",
    items: [
      { title: "The agent, explained", href: "/docs/concepts" },
      { title: "Instructions & model", href: "/docs/instructions" },
      { title: "Tools, skills & subagents", href: "/docs/capabilities" },
      { title: "Hooks", href: "/docs/hooks" },
      { title: "Connections & channels", href: "/docs/integrations" },
      { title: "Connecting Slack", href: "/docs/slack" },
      { title: "Connecting Buzz", href: "/docs/buzz" },
      { title: "Schedules", href: "/docs/schedules" },
      { title: "Memory", href: "/docs/memory" },
      { title: "Evals", href: "/docs/evals" },
    ],
  },
  {
    group: "Ship",
    items: [
      { title: "Deploy to Vercel", href: "/docs/deploy" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
];
