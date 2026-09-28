import { Link, useLocation } from "react-router-dom";
import { ABOUT_LINKS, LINKS } from "../content";

export default function Navbar() {
  const { pathname } = useLocation();
  const inAbout = ABOUT_LINKS.some(({ to }) => to === pathname);

  const fold = (event) => event.currentTarget.closest("details")?.removeAttribute("open");

  const link = ({ to, label }) => (
    <Link
      to={to}
      className={
        pathname === to ? "text-flame" : "text-ink/85 hover:text-ink"
      }
      aria-current={pathname === to ? "page" : undefined}
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="no-underline font-slab text-xl text-ink">
          شمع Shamma
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {LINKS.map((item) => (
              <span key={item.to} className="text-sm">
                {link(item)}
              </span>
            ))}

            <details className="group relative">
              <summary
                className={`flex cursor-pointer list-none text-sm hover:text-ink [&::-webkit-details-marker]:hidden ${
                  inAbout ? "text-flame" : "text-ink/85"
                }`}
              >
                About
                <span aria-hidden="true" className="ml-1.5 text-[0.6rem] group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <ul className="absolute right-0 z-30 mt-2 w-48 rounded-sm border border-line bg-panel py-1 text-sm shadow-lg shadow-black/40">
                {ABOUT_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={fold}
                      className="block px-4 py-1.5 text-muted hover:bg-ink/5 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>

          <details className="group md:hidden">
            <summary className="cursor-pointer list-none text-sm text-ink/85 hover:text-ink [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Main"
              className="absolute right-6 mt-2 w-48 rounded-sm border border-line bg-panel py-1 text-sm shadow-lg shadow-black/40"
            >
              {[...LINKS, ...ABOUT_LINKS].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={fold}
                  className="block px-4 py-1.5 text-muted hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
