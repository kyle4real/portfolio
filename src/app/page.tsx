"use client";

import {
  ExperienceCard,
  ExperienceCardMain,
  ExperienceCardTitle,
  ExperienceCardTitleRoleAndCompany,
  ExperienceCardDescription,
} from "@/components/experience-card";
import { LinkAndArrow } from "@/components/link-and-arrow";
import { Spotlight } from "@/components/spotlight";
import { TechStack } from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const enum SectionId {
  About = "about",
  Experience = "experience",
  Projects = "projects",
}

const navItemIdToLabel = {
  [SectionId.About]: "About",
  [SectionId.Experience]: "Experience",
  [SectionId.Projects]: "Projects",
} as const;

const navItems = [
  { label: navItemIdToLabel[SectionId.About], id: SectionId.About },
  { label: navItemIdToLabel[SectionId.Experience], id: SectionId.Experience },
  { label: navItemIdToLabel[SectionId.Projects], id: SectionId.Projects },
];

const socialItems = [
  { label: "Github", href: "https://github.com/kyle4real", icon: <GitHubLogoIcon className="size-6" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kyle-friel/", icon: <LinkedInLogoIcon className="size-6" /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if user is at the top of the page
        if (window.scrollY < 100) {
          setActiveSection(SectionId.About);
          return;
        }

        // Filter for intersecting entries and sort by intersection ratio
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id as SectionId;
          setActiveSection(id);
        }
      },
      {
        // Less strict margins to handle smaller sections better
        rootMargin: "-10% 0px -50% 0px",
        // Multiple thresholds to trigger callbacks at different visibility levels
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Spotlight>
      <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:w-1/2 lg:py-24 lg:sticky lg:top-0 lg:max-h-screen lg:flex lg:flex-col lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                <Link href="/">Kyle Friel</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">Full-stack Engineer</h2>

              <nav className="hidden lg:block">
                <ul className="mt-16 w-max">
                  {navItems.map(({ label, id }) => {
                    const isActive = activeSection === id;

                    return (
                      <li key={id}>
                        <Link href={`#${id}`} className={cn("py-3 items-center flex", isActive && "text-blue-400")}>
                          <span className={cn("block h-px bg-blue-400 transition-[width]", isActive ? "w-8" : "w-0")} />
                          <span className={cn(isActive && "pl-1")}>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <ul className="mt-8 flex items-center gap-5">
              <li>
                <Button asChild className=" bg-blue-400/10! text-white border-blue-400/40!" variant="outline">
                  <LinkAndArrow href="/resume.pdf" target="_blank">
                    Resume
                  </LinkAndArrow>
                </Button>
              </li>
              {socialItems.map(({ href, label, icon }) => (
                <li key={label} className="text-xs">
                  <a href={href} className="block hover:text-zinc-200">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main className="lg:w-1/2 lg:py-24 pt-24">
            <Section id={SectionId.About}>
              <div>
                <p>
                  Full-stack Engineer with 5+ years of experience owning complex product systems end-to-end, spanning
                  healthcare compliance, real-time scheduling, analytics, and revenue-driving platforms.
                </p>
              </div>
            </Section>

            <Section id={SectionId.Experience}>
              <ol className="group/list space-y-12">
                {/* BetterHelp */}
                <li>
                  <ExperienceCard>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                      Apr 2025 — Jan 2026
                    </header>

                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.linkedin.com/company/betterhelp-com/">
                        <ExperienceCardTitleRoleAndCompany role="Software Engineer II" company="BetterHelp" />
                      </ExperienceCardTitle>

                      <ExperienceCardDescription>
                        <ul className="list-disc pl-5">
                          <li>
                            Drove technical knowledge transfer as an early UpLift engineer during its $45M acquisition
                            by BetterHelp, implementing insurance infrastructure that expanded the platform beyond
                            self-pay
                          </li>
                          <li>
                            Architected and built billable Intake and Progress Notes using Next.js and TypeScript,
                            introducing structured data, AI-assisted narratives, and safety workflows to improve audit
                            compliance
                          </li>
                          <li>
                            Built a real-time scheduling experience allowing clients to book sessions with therapists or
                            psychiatrists based on team availability, featuring live calendar slots and dashboard
                            notifications
                          </li>
                          <li>
                            Delivered UTM-driven onboarding attribution with Python, Flask, and PostgreSQL, enabling
                            reliable conversion and step-level drop-off analysis for marketing teams
                          </li>
                        </ul>
                      </ExperienceCardDescription>

                      <TechStack
                        technologies={["NEXT", "TYPESCRIPT", "TAILWIND", "PYTHON", "FLASK", "POSTGRES", "DOCKER"]}
                      />
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>

                {/* UpLift */}
                <li>
                  <ExperienceCard>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                      Feb 2022 — Apr 2025
                    </header>

                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.linkedin.com/company/uplift-therapy/">
                        <ExperienceCardTitleRoleAndCompany role="Software Engineer" company="UpLift" />
                      </ExperienceCardTitle>

                      <ExperienceCardDescription>
                        <ul className="list-disc pl-5">
                          <li>
                            Developed a multi-step onboarding and matching flow using React, TypeScript, and XState,
                            improving care triage and addressing 53% drop-off in the highest-impact funnel stage
                          </li>
                          <li>
                            Built a provider onboarding and profile lifecycle experience with editable forms, submission
                            states, and admin review feedback, supporting iterative updates and approval-driven
                            publishing
                          </li>
                          <li>
                            Implemented a responsive insurance management flow for primary and secondary coverage,
                            enforcing strict business rules across commercial, Medicare, and Medicaid plans
                          </li>
                          <li>
                            Architected a Zoom SDK live session experience replacing Twilio, including a
                            therapist-facing video layout with in-session sidebar tools for notes, client data, and
                            workflow efficiency
                          </li>
                          <li>
                            Empowered other devs on the team through leadership by interviewing candidates, mentoring
                            junior engineers, engaging in code reviews, and setting standards for codebase best
                            practices
                          </li>
                        </ul>
                      </ExperienceCardDescription>

                      <TechStack
                        technologies={[
                          "REACT",
                          "TYPESCRIPT",
                          "TANSTACK_QUERY",
                          "MATERIALUI",
                          "PYTHON",
                          "FLASK",
                          "POSTGRES",
                          "ZOOM_SDK",
                          "TWILIO",
                          "DOCKER",
                        ]}
                      />
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>

                {/* Astro Vinyl Art */}
                <li className="mb-12">
                  <ExperienceCard>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                      Aug 2019 — Feb 2022
                    </header>

                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.linkedin.com/company/astro-vinyl-art/">
                        <ExperienceCardTitleRoleAndCompany role="Lead Engineer" company="Astro Vinyl Art" />
                      </ExperienceCardTitle>

                      <ExperienceCardDescription>
                        <ul className="list-disc pl-5">
                          <li>
                            Designed and built a logistics web application unifying event scheduling, inventory,
                            warehouse picking, and sales workflows, driving 150% YoY ARR growth using React, TypeScript,
                            Node.js
                          </li>
                          <li>
                            Scaled engineering output by hiring and mentoring an engineer to own core features, enforce
                            code quality, and lead code reviews
                          </li>
                          <li>
                            Built a mobile-friendly POS system backed by a Node.js, Express, and TypeScript API,
                            tracking 300k+ sales and inventory updates and integrating seamlessly with the Shopify API
                          </li>
                          <li>
                            Improved analytics performance by 600% by optimizing MongoDB queries and data access
                            patterns for high-volume reporting on custom MUI chart components
                          </li>
                          <li>
                            Established CI/CD pipelines with GitHub Actions, set up staging environments, led
                            cross-functional development in Jira, and integrated AWS, Google APIs, Cloudinary, and
                            Firebase
                          </li>
                        </ul>
                      </ExperienceCardDescription>

                      <TechStack
                        technologies={[
                          "REACT",
                          "TYPESCRIPT",
                          "TANSTACK_QUERY",
                          "MATERIALUI",
                          "NODE",
                          "EXPRESS",
                          "MONGODB",
                          "AWS",
                          "GITHUB_ACTIONS",
                        ]}
                      />
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
              </ol>

              <Button asChild className="mt-12 bg-blue-400/10! text-white border-blue-400/40!" variant="outline">
                <LinkAndArrow href="/resume.pdf" target="_blank">
                  View Full Resume
                </LinkAndArrow>
              </Button>
            </Section>

            <Section id={SectionId.Projects}>
              <ol className="group/list space-y-12 pb-20">
                <li>
                  <ExperienceCard>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://cyanstack.com">
                        Cyan Stack — Independent Software Consulting
                      </ExperienceCardTitle>
                      <ExperienceCardDescription>
                        Built custom full-stack software and automation solutions for clients, handling architecture,
                        integrations, distributed systems, and deployment.
                      </ExperienceCardDescription>
                      <div className="mt-4">
                        <TechStack
                          technologies={[
                            "REACT",
                            "NEXT",
                            "TYPESCRIPT",
                            "TAILWIND",
                            "NODE",
                            "EXPRESS",
                            "POSTGRES",
                            "MONGODB",
                            "AWS",
                            "DOCKER",
                          ]}
                        />
                      </div>
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
              </ol>
            </Section>
          </main>
        </div>
      </div>
    </Spotlight>
  );
}

export type SectionProps = {
  id: SectionId;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section
      id={props.id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
      aria-label={navItemIdToLabel[props.id]}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-3xl">{navItemIdToLabel[props.id]}</h2>
      </div>
      {props.children}
    </section>
  );
};
