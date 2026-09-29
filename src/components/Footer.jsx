import { CONTACTS } from "../content";
import { CONTACT_ICONS } from "../icons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-1 px-6 py-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} Shamma · شمع — by the people, for the people.</p>
        <ul className="flex flex-wrap gap-x-5">
          {CONTACTS.map(({ label, value, href }) => {
            const Icon = CONTACT_ICONS[label];
            return (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={`${label}: ${value}`}
                  className="inline-flex items-center gap-1.5 text-muted hover:text-ink"
                >
                  {Icon && (
                    <span aria-hidden="true">
                      <Icon className="size-3.5" />
                    </span>
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
