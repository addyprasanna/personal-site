import { Hero } from "./components/Hero";
import { CurrentWork } from "./components/CurrentWork";
import { SelectedWork } from "./components/SelectedWork";
import { Philosophy } from "./components/Philosophy";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentWork />
      <SelectedWork />
      <Philosophy />
      <Experience />
      <Footer />
    </main>
  );
}
