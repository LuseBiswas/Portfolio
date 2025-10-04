"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  // Tab icons
  PanelTop,        // Software
  BadgeCheck,         // Expertise
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
  DatabaseZap,
  Boxes,        
} from "lucide-react";


function SkillCard({ icon: Icon, label }) {
  return (
    <div
      className="flex items-center gap-[clamp(8px,1.2vw,16px)] rounded-xl border border-neutral-200 bg-white px-[clamp(12px,1.6vw,20px)] py-[clamp(10px,1.4vw,16px)] shadow-sm"
    >
      <Icon className="shrink-0 text-neutral-600 w-[clamp(14px,1.6vw,20px)] h-[clamp(14px,1.6vw,20px)]" aria-hidden="true" />
      <span className="text-[clamp(12px,1.4vw,18px)] text-[#33322e]">{label}</span>
    </div>
  );
}

export default function Skills() {
  const tabs = [
    { key: "software", label: "Software", icon: PanelTop, },
    { key: "expertise", label: "Expertise", icon: BadgeCheck },
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
      // (Webflow wasn't in resume, keeping optional) 
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
    <section aria-labelledby="skills-heading" className="mt-[clamp(32px,4.5vw,80px)]">
      <h2
        id="skills-heading"
        className="font-dm-sans font-semibold text-[#33322e]
                           text-[clamp(18px,2.6vw,40px)]"
      >
        Skills
      </h2>

      {/* Tabs */}
      <div className="mt-[clamp(12px,1.8vw,24px)]">
        <div
          role="tablist"
          aria-label="Skills categories"
          className="relative flex items-center gap-[clamp(16px,2.4vw,32px)] border-b border-neutral-200"
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
                  "relative -mb-px inline-flex items-center gap-[clamp(6px,1vw,10px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(12px,1.4vw,16px)]",
                  "text-[#33322e] cursor-pointer",
                  isActive ? "font-medium" : "text-neutral-500 hover:text-[#33322e]"
                ].join(" ")}
              >
                <Icon className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden="true" />
                <span>{t.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-px h-[2px] bg-neutral-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
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
            className="pt-[clamp(16px,2.2vw,32px)]"
          >
            <div className="grid gap-[clamp(12px,1.8vw,20px)] grid-cols-[repeat(auto-fill,minmax(clamp(140px,18vw,220px),1fr))]">
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
