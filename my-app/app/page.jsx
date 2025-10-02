import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-[min(1600px,92vw)] px-[clamp(20px,6vw,128px)]">
        <Skills />
      </div>
    </main>
  );
}
