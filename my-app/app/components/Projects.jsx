"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FolderClosed,
  Tag,
  Box,
  Briefcase,
  GitBranch,
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

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-[clamp(3px,0.5vw,6px)] rounded-md border border-neutral-200 bg-neutral-50 px-[clamp(6px,0.8vw,10px)] py-[clamp(3px,0.6vw,6px)] text-[clamp(10px,1.2vw,14px)] text-neutral-700">
      <Tag className="w-[clamp(10px,1.2vw,14px)] h-[clamp(10px,1.2vw,14px)]" aria-hidden />
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const { title, subtitle, tag, href, cover, coverAlt = "Project cover" } = project;

  return (
    <a
      href={href || "#"}
      className="block rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
    >
      {/* Cover */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl bg-neutral-50">
        {cover ? (
          <Image
            src={cover}
            alt={coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-[clamp(16px,2vw,32px)]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-[clamp(16px,2vw,32px)]">
            {/* Fallback – feels like the Notion logo zone in the screenshot */}
            <Image
              src="/images/notion-logo.png" // replace with your asset if you have it
              alt="Notion logo"
              width={140}
              height={140}
              className="opacity-90"
            />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="border-t border-neutral-200 p-[clamp(12px,1.6vw,20px)]">
        <div className="mb-[clamp(4px,0.6vw,8px)] flex items-center gap-[clamp(6px,0.8vw,10px)] text-[#33322e]">
          <FolderClosed className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)] text-neutral-600" aria-hidden />
          <h3 className="truncate text-[clamp(13px,1.5vw,18px)] font-semibold">{title}</h3>
        </div>
        {subtitle && (
          <p className="mb-[clamp(8px,1.2vw,14px)] line-clamp-2 text-[clamp(12px,1.3vw,16px)] text-neutral-600">{subtitle}</p>
        )}
        {tag && <Chip>{tag}</Chip>}
      </div>
    </a>
  );
}

export default function Projects() {
  const tabs = [
    { key: "personal",   label: "Personal",   icon: Box },
    { key: "freelance",  label: "Freelancing",icon: Briefcase },
    { key: "oss",        label: "Open Source",icon: GitBranch },
  ];

  const projects = {
    personal: [
      {
        title: "Discord's Coaching",
        subtitle: "A coaching session for team management in Notion.",
        tag: "Coaching",
        href: "#",
        cover: "/images/notion-cover.png", // or leave undefined to use fallback
      },
      {
        title: "Ali Abdaal's Workspace",
        subtitle: "A Notion workspace for business and content management.",
        tag: "Notion Workspace",
        href: "#",
        cover: "/images/notion-cover.png",
      },
    ],
    freelance: [
      {
        title: "Client CRM in Notion",
        subtitle: "Pipeline + invoicing + docs with automation.",
        tag: "Consulting",
        href: "#",
        cover: "/images/notion-cover.png",
      },
      {
        title: "Growth Dashboard",
        subtitle: "Marketing metrics + weekly reporting in Google Sheets.",
        tag: "Analytics",
        href: "#",
        cover: "/images/notion-cover.png",
      },
    ],
    oss: [
      {
        title: "Resume Builder",
        subtitle: "Open-source resume templates & HTML→PDF pipeline.",
        tag: "Open Source",
        href: "#",
        cover: "/images/notion-cover.png",
      },
      {
        title: "InterviewBee CLI",
        subtitle: "Scripts to batch grade interviews with LLMs.",
        tag: "Dev Tools",
        href: "#",
        cover: "/images/notion-cover.png",
      },
    ],
  };

  const [active, setActive] = useState("personal");
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
    <section aria-labelledby="projects-heading" className="mt-[clamp(32px,4.5vw,80px)]">
      <h2
        id="projects-heading"
        className="font-dm-sans font-semibold text-[#33322e] text-[clamp(18px,2.6vw,40px)]"
      >
        Projects
      </h2>

      {/* Tabs */}
      <div className="mt-[clamp(12px,1.8vw,24px)] border-b border-neutral-200">
        <div role="tablist" aria-label="Project categories" className="flex items-center gap-[clamp(16px,2.4vw,32px)]">
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
            <div className="grid gap-[clamp(14px,2vw,24px)] grid-cols-[repeat(auto-fill,minmax(clamp(220px,28vw,340px),1fr))]">
              {projects[t.key].map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
