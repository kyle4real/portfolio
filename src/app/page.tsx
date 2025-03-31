"use client";

import {
  ExperienceCard,
  ExperienceCardMain,
  ExperienceCardTitle,
  ExperienceCardTitleRoleAndCompany,
  ExperienceCardDescription,
  ExperienceCardMainProps,
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
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id as SectionId;
          setActiveSection(id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px", // helps target sections near center
        threshold: [0.1, 0.5, 0.9],
      }
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Spotlight>
      <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:py-16 lg:py-0 ">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:w-1/2 lg:py-24 lg:sticky lg:top-0 lg:max-h-screen lg:flex lg:flex-col lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                <Link href="/">Kyle Friel</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                Full Stack Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">I help startups and teams build modern web applications.</p>
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
            <ul className="ml-1 mt-8 flex items-center gap-5">
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
                <p className="mb-4">
                  I'm a senior software engineer specializing in full stack web development. My passion lies in building
                  meaningful products that seamlessly integrate design, performance, and functionality to deliver
                  delightful user experiences. With a strong background in architecting end-to-end solutions, I'm adept
                  at collaborating with cross-functional teams to deliver high-quality software that meets business
                  objectives.
                </p>
                <p className="mb-4">
                  Currently I'm a software engineer at UpLift, a mental health startup whose mission is to rebuild
                  mental healthcare to work for everyone. I contribute to the creation and maintenance of UI components,
                  APIs, core features, and integrations that power UpLift's platform. Beyond coding, I mentor junior
                  developers, participate in code reviews, and help shape the technical direction of the product.
                </p>
                <p className="mb-4">
                  In the past, I've had the opportunity to architech and build a logistics platform for Astro Vinyl Art.
                  I was responsible for the entire software development lifecycle, from design to deployment, and
                  collaborated with stakeholders to define requirements, scope, and timelines. I also hired and managed
                  a developer to help build the platform - a rewarding experience that taught me the importance of
                  leadership and communication.
                </p>
                <p>
                  In my spare time, I'm usually working on a side project, learning a new skill, reading, playing
                  guitar, or exploring the great outdoors.
                </p>
              </div>
            </Section>
            <Section id={SectionId.Experience}>
              <ol className="group/list space-y-12">
                <li>
                  <ExperienceCard>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                      2022 — Present
                    </header>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.linkedin.com/company/uplift-therapy/">
                        <ExperienceCardTitleRoleAndCompany role="Software Engineer" company="UpLift" />
                      </ExperienceCardTitle>
                      <ExperienceCardDescription>
                        Build and maintain critical components used across UpLift's frontend. Architect and implement
                        core features, integrations, and APIs that power the platform. Mentor junior developers, conduct
                        code reviews, and help shape the technical direction of the product. Work closely with product
                        managers, designers, and developers to deliver and advocate for accessible, performant, and
                        delightful user experiences.
                      </ExperienceCardDescription>
                      <TechStack
                        technologies={[
                          "REACT",
                          "TYPESCRIPT",
                          "STORYBOOK",
                          "MATERIALUI",
                          "REACT_QUERY",
                          "PYTHON",
                          "FLASK",
                          "GRAPHQL",
                          "POSTGRES",
                        ]}
                      />
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
                <li className="mb-12">
                  <ExperienceCard>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                      2019 — 2022
                    </header>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.linkedin.com/company/astro-vinyl-art/">
                        <ExperienceCardTitleRoleAndCompany role="Software Engineer" company="Astro Vinyl Art" />
                      </ExperienceCardTitle>
                      <ExperienceCardDescription>
                        Architected and built a logistics platform that streamlined operations and improved efficiency.
                        Managed the entire software development lifecycle, from design to deployment. Collaborated with
                        stakeholders to define requirements, scope, and timelines. Hired and managed a developer to help
                        build the platform. Conducted code reviews, mentored junior developers, and provided technical
                        guidance to the team.
                      </ExperienceCardDescription>
                      <TechStack
                        technologies={["REACT", "TYPESCRIPT", "NODE", "EXPRESS", "MONGODB", "MONGOOSE", "MATERIALUI"]}
                      />
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
              </ol>
              <Button asChild className="mt-12">
                <LinkAndArrow href="/resume.pdf" target="_blank">
                  View Full Resume
                </LinkAndArrow>
              </Button>
            </Section>
            <Section id={SectionId.Projects}>
              <ol className="group/list space-y-12 pb-20">
                <li>
                  <ExperienceCard>
                    <div className="z-10 sm:col-span-2">
                      <Image
                        src="/images/fintrackr-4.png"
                        alt="Interactive Event Map Screenshot"
                        width={800}
                        height={600}
                        className="rounded-md shadow-sm object-cover aspect-video w-full hover:opacity-90 transition"
                      />
                    </div>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.listvendgo.com/">ListVendGo</ExperienceCardTitle>
                      <ExperienceCardDescription>
                        A three-sided event platform that connects event hosts, vendors, and go-ers in one seamless
                        experience. Hosts can manage events, vendors can apply to sell, and go-ers can browse and
                        attend.
                      </ExperienceCardDescription>
                      <div className="mt-4">
                        <TechStack
                          technologies={[
                            "NEXT",
                            "REACT",
                            "NODE",
                            "EXPRESS",
                            "PRISMA",
                            "POSTGRES",
                            "TAILWIND",
                            "TRPC",
                            "REACT_QUERY",
                          ]}
                        />
                      </div>
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
                <li>
                  <ExperienceCard>
                    <div className="z-10 sm:col-span-2">
                      <Image
                        src="/images/fintrackr-4.png"
                        alt="Interactive Event Map Screenshot"
                        width={800}
                        height={600}
                        className="rounded-md shadow-sm object-cover aspect-video w-full hover:opacity-90 transition"
                      />
                    </div>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://fin-trackr.vercel.app/">FinTracker</ExperienceCardTitle>
                      <ExperienceCardDescription>
                        Personal finance tracker where you can link banks accounts via Plaid and visualize your complete
                        financial landscape
                      </ExperienceCardDescription>
                      <div className="mt-4">
                        <TechStack technologies={["NEXT", "REACT", "TAILWIND", "POSTGRES", "PRISMA", "PLAID"]} />
                      </div>
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
                <li>
                  <ExperienceCard>
                    <div className="z-10 sm:col-span-2">
                      <Image
                        src="/images/tristate.png"
                        alt="Interactive Event Map Screenshot"
                        width={800}
                        height={600}
                        className="rounded-md shadow-sm object-cover aspect-video w-full hover:opacity-90 transition"
                      />
                    </div>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://www.tristatedesigner.com/">
                        Tri-State Designer
                      </ExperienceCardTitle>
                      <ExperienceCardDescription>
                        A website for a local agency specializing in web design for businesses. Includes a contact form
                        for potential clients to get in touch and start their design journey.
                      </ExperienceCardDescription>
                      <div className="mt-4">
                        <TechStack technologies={["NEXT", "REACT", "TAILWIND", "MONGODB", "MONGOOSE"]} />
                      </div>
                    </ExperienceCardMain>
                  </ExperienceCard>
                </li>
                <li>
                  <ExperienceCard>
                    <div className="z-10 sm:col-span-2">
                      <Image
                        src="/images/portfolio-v1.png"
                        alt="Interactive Event Map Screenshot"
                        width={800}
                        height={600}
                        className="rounded-md shadow-sm object-cover aspect-video w-full hover:opacity-90 transition"
                      />
                    </div>
                    <ExperienceCardMain>
                      <ExperienceCardTitle href="https://kylefriel.netlify.app/">Portfolio (v1)</ExperienceCardTitle>
                      <ExperienceCardDescription>
                        First version of my portfolio built in 2021.
                      </ExperienceCardDescription>
                      <div className="mt-4">
                        <TechStack technologies={["REACT", "SCSS", "JAVASCRIPT"]} />
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
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={navItemIdToLabel[props.id]}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-full bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-3xl">{navItemIdToLabel[props.id]}</h2>
      </div>
      {props.children}
    </section>
  );
};
