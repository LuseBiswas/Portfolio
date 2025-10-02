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
    { key: "volunteering", label: "Volunteering", icon: HeartHandshake },
  ];

  // ---- Replace with your real data ----
  const data = {
    work: [
      {
        company: "InterviewBee AI",
        role: "Founding Full-Stack Engineer",
        period: "2024 — Present",
        location: "Remote · India",
        companyUrl: "#",
        bullets: [
          "Built AI mock interview platform (voice + analytics) used by 150k+ users.",
          "Reduced response latency by 65% via streaming + queueing.",
          "Shipped admin tools for 100+ partners; improved session completion by 30%.",
        ],
        badges: ["Next.js", "Node", "Postgres", "LLMs", "WebRTC"],
      },
      {
        company: "Earthfields",
        role: "Full-Stack Engineer",
        period: "2023 — 2024",
        location: "Hybrid",
        bullets: [
          "Launched land toolkit MVP; geodata overlays & verification workflows.",
          "Set up CI/CD and infra hardening; ~25% perf gain across core flows.",
        ],
        badges: ["React", "GCP", "Maps", "Supabase", "RLS"],
      },
    ],
    education: [
      {
        company: "Your University",
        role: "B.Tech / BSc (Computer Science)",
        period: "2019 — 2023",
        location: "City",
        bullets: [
          "Graduated with coursework in DS&A, DBMS, Operating Systems.",
          "Led developer club; organized 5+ hackathons.",
        ],
        badges: ["Merit Scholarship", "Club Lead"],
      },
    ],
    volunteering: [
      {
        company: "Open-Source Mentorship",
        role: "Mentor",
        period: "2022 — Present",
        location: "Remote",
        bullets: [
          "Reviewed PRs and guided contributors on JS/TS patterns.",
          "Ran weekly office hours on DX and testing basics.",
        ],
        badges: ["Community", "Mentorship"],
      },
    ],
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
