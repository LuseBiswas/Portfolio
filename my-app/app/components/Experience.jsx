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
        "group relative -mb-px inline-flex items-center gap-2 py-3 text-sm",
        active ? "font-medium text-[#33322e]" : "text-neutral-500 hover:text-[#33322e]"
      ].join(" ")}
    >
      <Icon className="size-4" aria-hidden />
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
    <span className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs text-neutral-700">
      <Tag className="size-3" aria-hidden />
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
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 p-4">
        <div className="flex items-center gap-2 text-[#33322e]">
          <Building2 className="size-4 text-neutral-600" aria-hidden />
          <h3 className="text-[15px] font-semibold">{company}</h3>
        </div>
        <span className="text-neutral-400">•</span>
        <div className="text-[15px] text-[#33322e]">{role}</div>
      </div>

      <div className="border-t border-neutral-200 px-4 py-3 text-sm text-neutral-700">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {location && (
            <div className="inline-flex items-center gap-1">
              <MapPin className="size-4 text-neutral-600" aria-hidden />
              <span>{location}</span>
            </div>
          )}
          {period && (
            <div className="inline-flex items-center gap-1">
              <CalendarDays className="size-4 text-neutral-600" aria-hidden />
              <span>{period}</span>
            </div>
          )}
          {companyUrl && (
            <a
              href={companyUrl}
              className="inline-flex items-center gap-1 text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
            >
              <LinkIcon className="size-4" aria-hidden />
              Visit
            </a>
          )}
        </div>

        {bullets.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
            {bullets.map((b) => (
              <li key={b} className="text-neutral-700">
                {b}
              </li>
            ))}
          </ul>
        )}

        {badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
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
    <section aria-labelledby="experience-heading" className="mt-[clamp(28px,3.5vw,56px)]">
      <h2
        id="experience-heading"
        className="font-dm-sans text-[clamp(22px,2.4vw,28px)] font-bold text-[#33322e]"
      >
        Experience
      </h2>

      {/* Tabs */}
      <div className="mt-3 border-b border-neutral-200">
        <div role="tablist" aria-label="Experience categories" className="flex items-center gap-6">
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
            className="pt-4"
          >
            <div className="grid gap-4">
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
