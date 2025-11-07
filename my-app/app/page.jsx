import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecentActivities from "./components/RecentActivities";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-[min(1600px,92vw)] px-[clamp(20px,6vw,128px)]">
        <Skills />
        <Projects />
        <Experience />
        <RecentActivities />
      </div>
      <Contact />
    </main>
  );
}
