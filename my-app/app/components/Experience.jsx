"use client";
import { useRef, useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  MapPin,
  CalendarDays,
  Link as LinkIcon,
  Building2,
  Tag,
} from "lucide-react";

function TabButton({ id, label, Icon, active, onClick, onKeyDown, tabRef }) {
  return (
    <button
      ref={tabRef}
      id={`tab-${id}`}
      role="tab"
      aria-selected={active}
      aria-controls={`panel-${id}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={[
        "group relative -mb-px inline-flex items-center gap-[clamp(6px,1vw,10px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(12px,1.4vw,16px)]",
        active ? "font-medium text-[#33322e]" : "text-neutral-500 hover:text-[#33322e]"
      ].join(" ")}
    >
      <Icon className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden />
      <span>{label}</span>
      <span
        className={[
          "pointer-events-none absolute inset-x-0 -bottom-px h-[2px] transition-all",
          active ? "bg-neutral-900" : "bg-transparent group-hover:bg-neutral-300"
        ].join(" ")}
      />
    </button>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-[clamp(3px,0.5vw,6px)] rounded-md border border-neutral-200 bg-neutral-50 px-[clamp(6px,0.8vw,10px)] py-[clamp(3px,0.6vw,6px)] text-[clamp(10px,1.2vw,14px)] text-neutral-700">
      <Tag className="w-[clamp(10px,1.2vw,14px)] h-[clamp(10px,1.2vw,14px)]" aria-hidden />
      {children}
    </span>
  );
}

function ExperienceItem({
  role,
  company,
  companyUrl,
  location,
  period,
  bullets = [],
  badges = [],
}) {
  return (
    <div className="relative rounded-xl border border-neutral-200 bg-white shadow-sm">
      {/* header */}
      <div className="flex flex-wrap items-center gap-x-[clamp(8px,1.2vw,14px)] gap-y-[clamp(6px,0.8vw,10px)] p-[clamp(12px,1.6vw,20px)]">
        <div className="flex items-center gap-[clamp(6px,0.8vw,10px)] text-[#33322e]">
          <Building2 className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)] text-neutral-600" aria-hidden />
          <h3 className="text-[clamp(13px,1.5vw,18px)] font-semibold">{company}</h3>
        </div>
        <span className="text-neutral-400">•</span>
        <div className="text-[clamp(13px,1.5vw,18px)] text-[#33322e]">{role}</div>
      </div>

      <div className="border-t border-neutral-200 px-[clamp(12px,1.6vw,20px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(12px,1.3vw,16px)] text-neutral-700">
        <div className="flex flex-wrap items-center gap-x-[clamp(12px,1.6vw,20px)] gap-y-[clamp(6px,0.8vw,10px)]">
          {location && (
            <div className="inline-flex items-center gap-[clamp(4px,0.6vw,8px)]">
              <MapPin className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)] text-neutral-600" aria-hidden />
              <span>{location}</span>
            </div>
          )}
          {period && (
            <div className="inline-flex items-center gap-[clamp(4px,0.6vw,8px)]">
              <CalendarDays className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)] text-neutral-600" aria-hidden />
              <span>{period}</span>
            </div>
          )}
          {companyUrl && (
            <a
              href={companyUrl}
              className="inline-flex items-center gap-[clamp(4px,0.6vw,8px)] text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
            >
              <LinkIcon className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden />
              Visit
            </a>
          )}
        </div>

        {bullets.length > 0 && (
          <ul className="mt-[clamp(10px,1.4vw,16px)] list-disc space-y-[clamp(4px,0.6vw,8px)] pl-[clamp(16px,2vw,24px)] leading-relaxed">
            {bullets.map((b) => (
              <li key={b} className="text-neutral-700">
                {b}
              </li>
            ))}
          </ul>
        )}

        {badges.length > 0 && (
          <div className="mt-[clamp(10px,1.4vw,16px)] flex flex-wrap gap-[clamp(6px,0.8vw,10px)]">
            {badges.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const tabs = [
    { key: "work", label: "Work", icon: BriefcaseBusiness },
    { key: "education", label: "Education", icon: GraduationCap },
    // { key: "volunteering", label: "Volunteering", icon: HeartHandshake },
  ];

  // ---- Replace with your real data ----
  const data = {
    work: [
      {
        company: "Artesian Software Technologies LLP",
        role: "Software Development Engineer (SDE)",
        period: "2025 — Present",
        location: "Mohali, India",
        companyUrl: "https://www.artesian.io/",
        bullets: [
          "Designed and built a scalable intranet web app (HTML/CSS/JS, Python/Django) serving 1,500+ users.",
          "Integrated Wagtail CMS for dynamic content workflows, improving admin efficiency by ~25%.",
          "Deployed with Kamal + Docker for consistent environments and seamless scaling.",
          "Currently building a Super-Ecommerce platform using MedusaJS + Django."
        ],
        badges: ["Django", "Wagtail", "Python", "JavaScript", "MedusaJS", "Docker", "Kamal"]
      },
      
      {
        company: "InterviewBee AI",
        role: "Founding Engineer",
        period: "2024",
        location: "Remote · India",
        companyUrl: "https://interviewbee.ai/",
        bullets: [
          "Built AI mock interview platform (voice + analytics) used by 150k+ users.",
          "Reduced response latency by 65% via streaming + queueing.",
          "Shipped admin tools for 100+ partners; improved session completion by 30%.",
        ],
        badges: ["Next.js", "Node", "Postgres", "LLMs", "WebRTC"],
      },
      {
        company: "Earthfields",
        role: "Full-Stack Developer (Contract)",
        period: "2023",
        location: "Remote . India",
        companyUrl: "https://earthfields.in/",
        bullets: [
          "Developed scalable software with Next.js and JavaScript; improved overall performance ~25% via efficient rendering and API integration.",
          "Designed and built Admin frontend and backend from scratch (Next.js, TypeScript, SQL), enabling robust management for 100+ administrators.",
          "Collaborated via GitLab and Postman to design/test RESTful APIs, increasing third-party integration efficiency by ~15%."
        ],
        badges: ["Next.js", "TypeScript", "JavaScript", "SQL", "REST APIs", "GitLab", "Postman"]
      },
    ],
    education: [
      {
        company: "Chandigarh University",
        role: "B.Tech (Computer Science & Engineering)",
        period: "2021 — 2025",
        location: "Punjab, India",
        bullets: [
          "CGPA: 7.33.",
          "Coursework: Data Structures & Algorithms, DBMS, Operating Systems."
        ],
        badges: ["CSE", "CGPA 7.33"]
      }
      
    ],
    // volunteering: [
    //   {
    //     company: "Open-Source Mentorship",
    //     role: "Mentor",
    //     period: "2022 — Present",
    //     location: "Remote",
    //     bullets: [
    //       "Reviewed PRs and guided contributors on JS/TS patterns.",
    //       "Ran weekly office hours on DX and testing basics.",
    //     ],
    //     badges: ["Community", "Mentorship"],
    //   },
    // ],
  };
  // --------------------------------------

  const [active, setActive] = useState("work");
  const tabRefs = useRef([]);

  const onKeyDown = (e, index) => {
    const last = tabs.length - 1;
    if (e.key === "ArrowRight") {
      const next = index === last ? 0 : index + 1;
      setActive(tabs[next].key);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = index === 0 ? last : index - 1;
      setActive(tabs[prev].key);
      tabRefs.current[prev]?.focus();
    }
  };

  return (
    <section aria-labelledby="experience-heading" className="mt-[clamp(32px,4.5vw,80px)]">
      <h2
        id="experience-heading"
        className="font-dm-sans font-semibold text-[#33322e] text-[clamp(18px,2.6vw,40px)]"
      >
        Experience
      </h2>

      {/* Tabs */}
      <div className="mt-[clamp(12px,1.8vw,24px)] border-b border-neutral-200">
        <div role="tablist" aria-label="Experience categories" className="flex items-center gap-[clamp(16px,2.4vw,32px)]">
          {tabs.map((t, i) => (
            <TabButton
              key={t.key}
              id={t.key}
              label={t.label}
              Icon={t.icon}
              active={active === t.key}
              onClick={() => setActive(t.key)}
              onKeyDown={(e) => onKeyDown(e, i)}
              tabRef={(el) => (tabRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>

      {/* Panels */}
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <div
            key={t.key}
            id={`panel-${t.key}`}
            role="tabpanel"
            aria-labelledby={`tab-${t.key}`}
            hidden={!isActive}
            className="pt-[clamp(16px,2.2vw,32px)]"
          >
            <div className="grid gap-[clamp(12px,1.6vw,20px)]">
              {data[t.key].map((item, idx) => (
                <ExperienceItem key={`${item.company}-${idx}`} {...item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
