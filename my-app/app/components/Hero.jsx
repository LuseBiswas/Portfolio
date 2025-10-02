import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="portfolio-heading" className="pt-10 sm:pt-14 md:pt-16 lg:pt-20">
      <h1
        id="portfolio-heading"
        className="font-dm-sans font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#33322e]"
      >
        Portfolio
      </h1>

      <div className="mx-auto mt-6 sm:mt-8 md:mt-10 max-w-8xl">
        <div className="grid grid-cols-[1.1fr_1fr] items-start gap-4 sm:gap-8 md:gap-16 lg:gap-28 xl:gap-44">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <h2 className="font-dm-sans text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#33322e]">
              Software Devloper
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-[#33322e]">
            I'm a <strong>full-stack engineer</strong> specializing in <strong>AI-driven web apps</strong> that scale. <br /> 
            I ship fast, reliable products with <strong>Next.js, Django, PostgreSQL</strong>, and modern cloud, then squeeze out performance—like <strong>65% lower response latency</strong> and <strong>30% higher engagement</strong>. <br /> 
            I've delivered features used by <strong>150k+ users</strong> and <strong>100+ admins</strong> across products for InterviewBee AI, Earthfields, and Artesian.
            </p>

            <div className="mt-4 sm:mt-6 md:mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md  border border-[#000000] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-medium text-neutral-100 bg-neutral-800 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* Right: Image (bigger) */}
          <div className="lg:justify-self-end w-full mt-0 md:-mt-8 lg:-mt-12 xl:-mt-24">
            <Image
              src="/images/hero.png"
              alt="Person working on a laptop"
              width={400}
              height={400}
              priority
              className="w-auto h-[140px] sm:h-[200px] md:h-[280px] lg:h-[340px] xl:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
