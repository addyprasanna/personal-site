import { site } from "./data/site";
import { highlights, smallerThings, tools } from "./data/highlights";
import { experiences } from "./data/experience";

function Links({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem] ${className}`}>
      <li>
        <a className="prose-link" href={`mailto:${site.email}`}>
          Email
        </a>
      </li>
      <li>
        <a className="prose-link" href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a className="prose-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-text-muted">{children}</h2>;
}

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-[680px] px-5 pb-20 pt-20 sm:px-6 sm:pt-28">
      {/* Intro */}
      <section className="fade-up" style={{ ["--i" as string]: 0 }}>
        <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-[2rem]">{site.shortName}</h1>
        <p className="mt-5 text-[1.125rem] leading-relaxed sm:text-[1.2rem]">
          I&apos;m Addy. I build software for messy real-world operations: construction, supply chain, aviation
          data. I like being the engineer who actually talks to the customer.
        </p>
        <p className="mt-3 text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.2rem]">
          Right now I&apos;m a product engineer at Kaya AI. Former D1 fencer at Ohio State.
        </p>
        <Links className="mt-6" />
      </section>

      {/* Highlights */}
      <section className="fade-up mt-20" style={{ ["--i" as string]: 1 }}>
        <SectionTitle>Things I&apos;ve built</SectionTitle>
        <ul className="divide-y divide-border">
          {highlights.map((h) => (
            <li key={h.title} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium leading-snug">{h.title}</h3>
                <span className="text-sm text-text-muted">{h.org}</span>
              </div>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-text-muted">{h.body}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Smaller things */}
      <section className="fade-up mt-20" style={{ ["--i" as string]: 2 }}>
        <SectionTitle>Smaller things</SectionTitle>
        <ul className="space-y-2 text-[0.98rem] leading-relaxed">
          {smallerThings.map((s) => (
            <li key={s.title}>
              <span className="font-medium">{s.title}</span>
              <span className="text-text-muted"> — {s.body}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.98rem] leading-relaxed text-text-muted">Day to day I use {tools}.</p>
      </section>

      {/* Experience */}
      <section className="fade-up mt-20" style={{ ["--i" as string]: 3 }}>
        <SectionTitle>Experience</SectionTitle>
        <ol className="space-y-3 text-[0.98rem] leading-relaxed">
          {experiences.map((e) => (
            <li key={e.org + e.period} className="grid gap-x-6 sm:grid-cols-[7.5rem_1fr]">
              <span className="text-sm text-text-muted sm:pt-[0.2rem]">{e.period}</span>
              <span>
                <span className="font-medium">{e.org}</span>
                <span className="text-text-muted"> · {e.title}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer */}
      <footer className="fade-up mt-24 border-t border-border pt-8" style={{ ["--i" as string]: 4 }}>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <a className="prose-link text-[0.95rem]" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <Links />
        </div>
      </footer>
    </main>
  );
}
