"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "./nav";

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav className="text-[13.5px]">
      {DOCS_NAV.map((group) => (
        <div key={group.group} className="mb-7">
          <p className="kicker mb-2.5">{group.group}</p>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2.5 py-1.5 transition-colors ${
                      active
                        ? "bg-canvas font-medium text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
