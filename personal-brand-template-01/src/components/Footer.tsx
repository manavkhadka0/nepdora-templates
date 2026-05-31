import Link from "next/link";
import { FOOTER, NAV_LINKS, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__statement">{FOOTER.statement}</p>
        <p className="footer__sub">{FOOTER.sub}</p>
        <div className="footer__meta">
          <span>{SITE.name}</span>
          {NAV_LINKS.filter((l) => l.href !== "/").map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
