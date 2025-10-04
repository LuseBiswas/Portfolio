"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Calendar, X, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    if (isCalendlyOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/riteshbiswasut",
        parentElement: document.querySelector(".calendly-inline-widget"),
      });
    }
  }, [isCalendlyOpen]);
  return (
    <section className="pt-[clamp(40px,6vw,80px)]">
      <div className="mx-auto w-full max-w-[min(1600px,92vw)] px-[clamp(20px,6vw,128px)]">
        <h1
          id="portfolio-heading"
          className="font-dm-sans font-extrabold text-[#33322e] text-[clamp(40px,6.8vw,84px)]"
        >
          Portfolio
        </h1>

        <div className="mt-[clamp(20px,3.2vw,48px)]">
          {/* Mobile: flex-col (STACK)  |  md+: grid 2 cols */}
          <div
            className="
              flex flex-col
              md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]
              md:items-start
              gap-[clamp(16px,5vw,200px)]
            "
          >
            {/* Text first */}
            <div className="order-1 md:order-none max-w-[clamp(520px,48vw,820px)] md:max-w-none">
              <h2 className="font-dm-sans font-semibold text-[#33322e] text-[clamp(18px,2.6vw,40px)]">
                Software Devloper
              </h2>

              <p className="mt-[clamp(8px,1.6vw,18px)] text-[#33322e] text-[clamp(12px,1.4vw,20px)] leading-[clamp(1.45,2.1vw,1.85)]">
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

              <div className="mt-[clamp(14px,2.2vw,36px)] flex items-center gap-[clamp(6px,0.8vw,10px)]">
                {/* Book a Call Button - Initially Expanded */}
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="inline-flex items-center justify-center gap-[clamp(6px,1vw,10px)] rounded-md border border-black
                             px-[clamp(12px,1.8vw,22px)]
                             text-[clamp(12px,1.35vw,18px)]
                             font-medium text-neutral-100 bg-neutral-800
                             hover:bg-neutral-700 cursor-pointer transition-colors focus:outline-none focus:ring-2
                             focus:ring-neutral-400 focus:ring-offset-2
                             h-[clamp(44px,5vw,56px)]"
                >
                  <Calendar className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)] shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">Book a call</span>
                </button>

                {/* GitHub Button - Square */}
                <a
                  href="https://github.com/LuseBiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-black
                             w-[clamp(44px,5vw,56px)] h-[clamp(44px,5vw,56px)]
                             text-neutral-100 bg-neutral-800
                             hover:bg-neutral-700 cursor-pointer transition-colors focus:outline-none focus:ring-2
                             focus:ring-neutral-400 focus:ring-offset-2"
                  aria-label="GitHub"
                >
                  <Github className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden="true" />
                </a>

                {/* LinkedIn Button - Square */}
                <a
                  href="https://www.linkedin.com/in/ritesh-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-black
                             w-[clamp(44px,5vw,56px)] h-[clamp(44px,5vw,56px)]
                             text-neutral-100 bg-neutral-800
                             hover:bg-neutral-700 cursor-pointer transition-colors focus:outline-none focus:ring-2
                             focus:ring-neutral-400 focus:ring-offset-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Image second on mobile; right column on md+ */}
            <div
              className="
                order-2 md:order-none
                mt-[clamp(12px,4vw,28px)] md:mt-0
                md:col-start-2 md:ml-auto md:justify-self-end md:pr-0
                md:-translate-y-[clamp(0px,1.5vw,28px)]
                self-center md:self-start
              "
            >
              <Image
                src="/images/hero.png"
                alt="Person working on a laptop"
                width={1000}
                height={1000}
                priority
                sizes="(max-width: 767px) 88vw, (max-width: 1024px) 42vw, 36vw"
                className="
                  block
                  w-[min(88vw,560px)] md:w-auto
                  h-[clamp(200px,36vw,440px)]
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4"
          onClick={() => setIsCalendlyOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-neutral-700" />
            </button>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/riteshbiswasut"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
}
