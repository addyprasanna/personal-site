import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/ui/PageHeader";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Work spanning data infrastructure, applied ML, and operational systems — problem framing, tradeoffs under constraints, and measurable impact.",
};

export default function Projects() {
  return (
    <>
      <main className="container-main section-padding relative pb-0 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.09),transparent)] blur-3xl"
        />
        <PageHeader
          label="// selected work"
          title="Projects"
          description="A collection of work spanning data infrastructure, applied ML, and operational systems. I care about problem framing, tradeoffs under constraints, and measurable impact — not just tooling."
        />
        <ProjectsGrid projects={projects} />
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
