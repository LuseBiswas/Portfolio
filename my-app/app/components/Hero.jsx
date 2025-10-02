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
        <div className="grid grid-cols-1 items-start gap-44 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <h2 className="font-dm-sans text-3xl sm:text-4xl font-semibold text-[#33322e]">
              Software Devloper
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#33322e]">
            I’m a <strong>full-stack engineer</strong> specializing in <strong>AI-driven web apps</strong> that scale. <br /> 
            I ship fast, reliable products with <strong>Next.js, Django, PostgreSQL</strong>, and modern cloud, then squeeze out performance—like <strong>65% lower response latency</strong> and <strong>30% higher engagement</strong>. <br /> 
            I’ve delivered features used by <strong>150k+ users</strong> and <strong>100+ admins</strong> across products for InterviewBee AI, Earthfields, and Artesian.
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
          <div className="lg:justify-self-end w-full -mt-24">
            <Image
              src="/images/hero.png"
              alt="Person working on a laptop"
              width={400}
              height={400}
              priority
              className="w-auto h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
