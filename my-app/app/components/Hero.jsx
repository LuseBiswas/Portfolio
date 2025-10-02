import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="portfolio-heading" className="pt-20">
      <h1
        id="portfolio-heading"
        className="font-dm-sans font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#33322e]"
      >
        Portfolio
      </h1>

      <div className="mx-auto mt-10 max-w-8xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <h2 className="font-dm-sans text-3xl sm:text-4xl font-semibold text-[#33322e]">
              Notion Expert
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              I&apos;m a <strong>certified expert</strong> in Notion, helping busy
              people like you become organized and productive. I design and
              optimize Notion workspaces to be clutter-free, so you can{" "}
              <strong>focus on what&apos;s important</strong> and{" "}
              <strong>get things done</strong>. My work has benefited over{" "}
              <strong>100,000 customers</strong>, including freelancers,
              entrepreneurs, and business owners.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-neutral-900 px-5 py-3 text-base font-medium text-neutral-100 bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* Right: Image (bigger) */}
          <div className="lg:justify-self-end w-full">
            <Image
              src="/images/hero.png"
              alt="Person working on a laptop"
              width={350}
              height={350}
              priority
              sizes="(min-width: 1024px) 300px, 90vw"
              className="w-full max-w-[300px] md:max-w-[280px] lg:max-w-[350px] h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
