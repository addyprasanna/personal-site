import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Footer() {
  return (
    <footer className="border-t border-[#111] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-[#333] tracking-widest uppercase mb-3">
              // get in touch
            </p>
            <a
              href="mailto:advaith.prasanna@gmail.com"
              className="text-[#666] hover:text-[#e2e2e2] transition-colors duration-200 text-sm"
            >
              advaith.prasanna@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/addyprasanna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#333] hover:text-[#aaa] transition-colors duration-200"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/advaith-prasanna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#333] hover:text-[#aaa] transition-colors duration-200"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="mailto:advaith.prasanna@gmail.com"
              aria-label="Email"
              className="text-[#333] hover:text-[#aaa] transition-colors duration-200"
            >
              <HiOutlineMail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-[#2a2a2a]">
            Advaith Prasanna · 2026
          </p>
          <p className="font-mono text-[11px] text-[#2a2a2a]">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
