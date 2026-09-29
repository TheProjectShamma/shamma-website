import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function useTitle(title) {
  useEffect(() => {
    document.title = `${title} · Shamma`;
  }, [title]);
}

export function Page({ title, lede, children }) {
  useTitle(title);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-20">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-2 border-b border-line pb-4">
        <h1 className="text-3xl text-ink">{title}</h1>
        {lede && <p className="max-w-xl text-lg text-muted">{lede}</p>}
      </header>
      {children}
    </div>
  );
}

export function Split({ sections }) {
  const [id, setId] = useState(sections[0].id);
  const [closed, setClosed] = useState(false);
  const current = sections.find((s) => s.id === id) ?? sections[0];

  const isOpen = (section) => !closed && section.id === id;

  const toggle = (section) => {
    if (isOpen(section)) setClosed(true);
    else {
      setId(section.id);
      setClosed(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-14">
      <nav
        aria-label="Sections"
        className="flex shrink-0 flex-col gap-2 md:w-64 md:overflow-visible"
      >
        {sections.map((section) => {
          const open = isOpen(section);
          return (
            <div key={section.id}>
              <button
                type="button"
                onClick={() => toggle(section)}
                aria-expanded={open}
                aria-controls={open ? `panel-${section.id}` : undefined}
                className={`flex h-14 w-full shrink-0 items-center justify-between gap-3 border-2 px-4 text-left leading-snug transition-colors md:min-w-0 ${
                  open
                    ? "border-ink bg-paper text-ink"
                    : "border-ink bg-ink text-paper hover:bg-body"
                }`}
              >
                <span className="line-clamp-2">{section.title}</span>
                <span
                  aria-hidden="true"
                  className={`text-xs transition-transform md:hidden ${
                    open ? "rotate-90" : ""
                  }`}
                >
                  ▸
                </span>
              </button>
              {open && (
                <div id={`panel-${section.id}`} className="page-in pt-4 pb-3 md:hidden">
                  {section.render()}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div key={current.id} className="page-in hidden min-w-0 md:block md:max-w-3xl md:flex-1">
        {current.render()}
      </div>
    </div>
  );
}

export function List({ children }) {
  return <dl className="divide-y divide-line">{children}</dl>;
}

export function Item({ term, note, children }) {
  return (
    <div className="grid gap-x-6 py-2.5 sm:grid-cols-[9rem_1fr]">
      <dt className="text-ink">
        {term}
        {note && <span className="mt-0.5 block text-sm text-flame">{note}</span>}
      </dt>
      <dd className="text-muted">{children}</dd>
    </div>
  );
}

export function Quote({ children }) {
  return (
    <blockquote className="border-l-2 border-flame pl-5 text-xl text-ink">
      {children}
    </blockquote>
  );
}

export function Btn({ to, href, children, plain = false }) {
  const className = [
    "no-underline inline-block rounded-sm border-2 px-8 py-3.5 text-lg font-medium transition-colors",
    plain
      ? "border-ink/70 bg-ink/10 text-ink hover:bg-ink hover:text-paper"
      : "border-flame bg-flame text-paper shadow-lg shadow-flame/30 hover:border-ink hover:bg-ink",
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
