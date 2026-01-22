import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function HoverBar({
  logoSrc,
  title,
  subtitle,
  rightText,
  href,
}: {
  logoSrc: string;
  title: string;
  subtitle: string;
  rightText: string;
  href?: string;
}) {
  const content = (
    <div
      className="
        group flex items-center justify-between gap-4
        rounded-2xl border border-neutral-200 bg-white px-5 py-4
        transition-all
        hover:-translate-y-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm
      "
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-neutral-200 flex items-center justify-center">
          <Image
          src={logoSrc}
          alt=""
          width={40}
          height={40}
          className="h-full w-full rounded-xl"
        />
      </div>

        <div className="min-w-0">
          <div className="truncate font-medium text-neutral-900">{title}</div>
          <div className="truncate text-sm text-neutral-600">{subtitle}</div>
        </div>
      </div>

      <div className="shrink-0 text-sm text-neutral-500">{rightText}</div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}


export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">
        Advaith Prasanna
      </h1>

      <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
        I work at the intersection of data, machine learning, and systems—building
        tools that make complex decisions clearer, more transparent, and more
        trustworthy.
      </p>

      <p className="mt-4 text-neutral-600 leading-relaxed">
        This site is a living document. I’ll use it to share projects, writeups,
        and what I’m learning over time.
      </p>

      {/* Education */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Education
        </h2>

        <div className="mt-6 space-y-3">
          <HoverBar
            logoSrc="/block-o.svg"
            title="The Ohio State University"
            subtitle="B.S. Computer Science & Engineering — Artificial Intelligence"
            rightText="2022 — 2026"
          />

          <HoverBar
            logoSrc="/block-o.svg"
            title="The Ohio State University"
            subtitle="B.S. Data Analytics — Computational Analytics"
            rightText="2022 — 2026"
          />
        </div>
     </section>

      {/* Experiences */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Experience
        </h2>

        <div className="mt-6 space-y-3">
          <HoverBar
            logoSrc="/netjets.jpeg" // or /netjets.png later
            title="NetJets"
            subtitle="Data Analytics / Engineering Intern — Snowflake audit dashboard + usage transparency"
          rightText="Summer 2024"
            href="/projects"
          />

          <HoverBar
            logoSrc="/block-o.svg" // placeholder for now
            title="Ohio State Athletics"
            subtitle="Analytics Intern — Ticket traffic dashboard + stakeholder reporting"
            rightText="Summer 2023"
            href="/projects"
          />

          <HoverBar
            logoSrc="/kalypso.jpeg" // placeholder for now
            title="Kalypso (Rockwell Automation)"
            subtitle="Data Science Analyst Intern — Manufacturing ML feature pipeline"
            rightText="Summer 2025"
            href="/projects"
          />
        </div>
      </section>


      {/* Social links */}
      <div className="mt-8 flex items-center gap-5 text-neutral-600">
        <a
          href="https://github.com/addyprasanna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/advaith-prasanna/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://www.instagram.com/addyprasanna/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </main>
  );
}

