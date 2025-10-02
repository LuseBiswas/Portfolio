"use client";
import { useState, useRef } from "react";
import {
  // Tab icons
  Boxes,        // Software
  User,         // Expertise
  Languages,    // Languages (programming)

  // Software/tooling icons (Lucide)
  PenLine,          // Notion (close enough)
  CalendarDays,     // Webflow (calendar/ops vibe)
  Palette,          // Figma / CSS / UI
  Code2,            // Python / general code
  Table2,           // SQL / Sheets
  Atom,             // React / React Native
  Braces,           // C/C++ / JS
  FileCode,         // HTML
  FileType,         // TypeScript
  Server,           // Node / Express
  Route,            // Express routing
  Leaf,             // Django (framework) or Mongo (alt)
  LayoutGrid,       // Bootstrap
  Smartphone,       // React Native
  Newspaper,        // Wagtail CMS
  Database,         // Databases (MySQL/Postgres)
  Cloud,            // GCP / Cloud
  Flame,            // Firebase
  GitBranch,        // Git
  Github,           // GitHub
  Gitlab,           // GitLab
  Workflow,         // Postman (API workflows)
  Rocket,           // Deployment / DevOps
  DatabaseZap,      // Supabase
} from "lucide-react";

function SkillCard({ icon: Icon, label }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm"
    >
      <Icon className="size-4 shrink-0 text-neutral-600" aria-hidden="true" />
      <span className="text-[15px] text-[#33322e]">{label}</span>
    </div>
  );
}

export default function Skills() {
  const tabs = [
    { key: "software", label: "Software", icon: Boxes },
    { key: "expertise", label: "Expertise", icon: User },
    { key: "language", label: "Languages", icon: Languages }
  ];

  // ---- DATA FROM YOUR RESUME ----
  const data = {
    // Web Dev + DB/Cloud + Tools & DevOps + a few design tools
    software: [
      // Web Dev
      { label: "React.js",       icon: Atom },
      { label: "Next.js",        icon: Atom },
      { label: "Node.js",        icon: Server },
      { label: "Express",        icon: Route },
      { label: "Django",         icon: Leaf },
      { label: "Bootstrap",      icon: LayoutGrid },
      { label: "React Native",   icon: Smartphone },
      { label: "HTML",           icon: FileCode },
      { label: "CSS",            icon: Palette },
      { label: "Wagtail (CMS)",  icon: Newspaper },

      // Databases & Cloud
      { label: "MongoDB",        icon: Database },
      { label: "MySQL",          icon: Database },
      { label: "PostgreSQL",     icon: Database },
      { label: "Firebase",       icon: Flame },
      { label: "SQL",            icon: Table2 },
      { label: "GCP",            icon: Cloud },

      // Tools & DevOps
      { label: "Docker",         icon: Rocket },
      { label: "Git",            icon: GitBranch },
      { label: "GitHub",         icon: Github },
      { label: "GitLab",         icon: Gitlab },
      { label: "Postman",        icon: Workflow },
      { label: "Supabase",       icon: DatabaseZap },

      // Design/ops extras you use
      { label: "Figma",          icon: Palette },
      { label: "Notion",         icon: PenLine },
      { label: "Google Sheets",  icon: Table2 },
      // (Webflow wasn’t in resume, keeping optional) 
      // { label: "Webflow",        icon: CalendarDays },
    ],

    // Practical capabilities inferred from your roles/projects
    expertise: [
      { label: "Full-Stack Development",      icon: Boxes },
      { label: "REST API Design",             icon: Workflow },
      { label: "AI/LLM Integration",          icon: Code2 },
      { label: "Prompt Engineering",          icon: Code2 },
      { label: "Voice/Interview AI",          icon: Languages },
      { label: "Performance Optimization",    icon: Rocket },
      { label: "Admin Dashboards",            icon: LayoutGrid },
      { label: "CMS & Content Workflows",     icon: Newspaper },
      { label: "Authentication (Firebase)",   icon: Flame },
      { label: "Data Modeling & SQL",         icon: Table2 },
      { label: "Containerization & Deploys",  icon: Rocket },
      { label: "UI/UX Systems",               icon: Palette },
    ],

    // Programming languages (from resume)
    language: [
      { label: "C/C++",       icon: Braces },
      { label: "Python",      icon: Code2 },
      { label: "JavaScript",  icon: Braces },
      { label: "TypeScript",  icon: FileType },
    ],
  };

  const [active, setActive] = useState("software");
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
    <section aria-labelledby="skills-heading" className="mt-[clamp(24px,3vw,48px)]">
      <h2
        id="skills-heading"
        className="font-dm-sans text-[clamp(22px,2.4vw,28px)] font-bold text-[#33322e]"
      >
        Skills
      </h2>

      {/* Tabs */}
      <div className="mt-3">
        <div
          role="tablist"
          aria-label="Skills categories"
          className="flex items-center gap-6 border-b border-neutral-200"
        >
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                ref={el => (tabRefs.current[i] = el)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                id={`tab-${t.key}`}
                onClick={() => setActive(t.key)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={[
                  "group relative -mb-px inline-flex items-center gap-2 py-3 text-sm",
                  "text-[#33322e]",
                  isActive ? "font-medium" : "text-neutral-500 hover:text-[#33322e]"
                ].join(" ")}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{t.label}</span>
                <span
                  className={[
                    "pointer-events-none absolute inset-x-0 -bottom-px h-[2px] transition-all",
                    isActive ? "bg-neutral-900" : "bg-transparent group-hover:bg-neutral-300"
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <div
            key={t.key}
            role="tabpanel"
            id={`panel-${t.key}`}
            aria-labelledby={`tab-${t.key}`}
            hidden={!isActive}
            className="pt-4"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data[t.key].map((item) => (
                <SkillCard key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
