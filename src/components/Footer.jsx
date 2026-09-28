import { CONTACTS } from "../content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-1 px-6 py-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} Shamma · شمع — by the people, for the people.</p>
        <ul className="flex flex-wrap gap-x-5">
          {CONTACTS.map(({ label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={`${label}: ${value}`}
                className="text-muted hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
