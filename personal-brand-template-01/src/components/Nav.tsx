"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__wordmark">
          {SITE.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav__link"
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
