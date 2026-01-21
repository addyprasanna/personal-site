import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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

