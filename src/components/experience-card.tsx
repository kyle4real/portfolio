import { cn } from "@/lib/utils";
import { LinkAndArrow } from "./link-and-arrow";

type ExperienceCardProps = {
  children: React.ReactNode;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      {props.children}
    </div>
  );
};

export type ExperienceCardMainProps = {
  children: React.ReactNode;
  className?: string;
};

export const ExperienceCardMain: React.FC<ExperienceCardMainProps> = (props) => {
  return <div className={cn("z-10 sm:col-span-6", props.className)}>{props.children}</div>;
};

type ExperienceCardTitleProps = {
  children: React.ReactNode;
  href: string;
};

export const ExperienceCardTitle: React.FC<ExperienceCardTitleProps> = (props) => {
  return (
    <h3 className="leading-snug font-medium text-zinc-200">
      <LinkAndArrow href={props.href} target="_blank" rel="noopener noreferrer">
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block cursor-pointer" />
        {props.children}
      </LinkAndArrow>
    </h3>
  );
};

type ExperienceCardTitleRoleAndCompanyProps = {
  role: string;
  company: string;
};

export const ExperienceCardTitleRoleAndCompany: React.FC<ExperienceCardTitleRoleAndCompanyProps> = (props) => {
  return (
    <span>
      {props.role} · {props.company}
    </span>
  );
};

export type ExperienceCardDescriptionProps = {
  children: React.ReactNode;
};

export const ExperienceCardDescription: React.FC<ExperienceCardDescriptionProps> = (props) => {
  return <p className="mt-2 text-sm leading-normal">{props.children}</p>;
};
