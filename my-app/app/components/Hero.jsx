import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[clamp(40px,6vw,80px)]">
      {/* One container wraps heading + grid for perfect alignment */}
      <div className="mx-auto w-full max-w-[min(1600px,92vw)] px-[clamp(20px,6vw,128px)]">
        <h1
          id="portfolio-heading"
          className="font-dm-sans font-extrabold text-[#33322e]
                     text-[clamp(40px,6.8vw,84px)]"
        >
          Portfolio
        </h1>

        <div className="mt-[clamp(20px,3.2vw,48px)]">
          {/* Always 2 columns; proportional 1.1fr / 1fr */}
          <div
            className="grid items-start
                       grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]
                       gap-[clamp(16px,5vw,200px)]"
          >
            {/* Left: Text */}
            <div className="max-w-[clamp(520px,48vw,820px)]">
              <h2
                className="font-dm-sans font-semibold text-[#33322e]
                           text-[clamp(18px,2.6vw,40px)]"
              >
                Software Devloper
              </h2>

              <p
                className="mt-[clamp(8px,1.6vw,18px)] text-[#33322e]
                           text-[clamp(12px,1.4vw,20px)]
                           leading-[clamp(1.45,2.1vw,1.85)]"
              >
                I&apos;m a <strong>full-stack engineer</strong> specializing in{" "}
                <strong>AI-driven web apps</strong> that scale. <br />
                I ship fast, reliable products with{" "}
                <strong>Next.js, Django, PostgreSQL</strong>, and modern cloud,
                then squeeze out performance—like{" "}
                <strong>65% lower response latency</strong> and{" "}
                <strong>30% higher engagement</strong>. <br />
                I&apos;ve delivered features used by <strong>150k+ users</strong>{" "}
                and <strong>100+ admins</strong> across products for InterviewBee
                AI, Earthfields, and Artesian.
              </p>

              <div className="mt-[clamp(14px,2.2vw,36px)]">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border border-black
                             px-[clamp(12px,1.8vw,22px)]
                             py-[clamp(8px,1.4vw,14px)]
                             text-[clamp(12px,1.35vw,18px)]
                             font-medium text-neutral-100 bg-neutral-800
                             hover:bg-neutral-800 focus:outline-none focus:ring-2
                             focus:ring-neutral-400 focus:ring-offset-2"
                >
                  Book a call
                </a>
              </div>
            </div>

            {/* Right: Image — flush to container's right edge */}
            <div className="col-start-2 ml-auto justify-self-end pr-0 -translate-y-[clamp(0px,1.5vw,28px)]">
              <Image
                src="/images/hero.png"
                alt="Person working on a laptop"
                width={1000}
                height={1000}
                priority
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 42vw, 36vw"
                className="block w-auto h-[clamp(160px,22vw,440px)] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
