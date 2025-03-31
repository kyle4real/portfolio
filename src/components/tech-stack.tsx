import { cn } from "@/lib/utils";

export type Technology =
  | "REACT"
  | "NEXT"
  | "TAILWIND"
  | "MATERIALUI"
  | "SCSS"
  | "TYPESCRIPT"
  | "JAVASCRIPT"
  | "NODE"
  | "EXPRESS"
  | "MONGODB"
  | "MONGOOSE"
  | "GRAPHQL"
  | "REDUX"
  | "VITE"
  | "GIT"
  | "GITHUB"
  | "DOCKER"
  | "POSTGRES"
  | "PRISMA"
  | "STORYBOOK"
  | "REACT_QUERY"
  | "PYTHON"
  | "FLASK"
  | "OAUTH"
  | "GRAPHQL"
  | "PLAID"
  | "TRPC";

const technologyMap: Record<Technology, string> = {
  REACT: "React",
  NEXT: "Next.js",
  TAILWIND: "Tailwind CSS",
  MATERIALUI: "Material UI",
  SCSS: "SCSS",
  TYPESCRIPT: "TypeScript",
  JAVASCRIPT: "JavaScript",
  NODE: "Node.js",
  EXPRESS: "Express.js",
  MONGODB: "MongoDB",
  MONGOOSE: "Mongoose",
  GRAPHQL: "GraphQL",
  REDUX: "Redux",
  VITE: "Vite",
  GIT: "Git",
  GITHUB: "GitHub",
  DOCKER: "Docker",
  POSTGRES: "PostgreSQL",
  PRISMA: "Prisma",
  STORYBOOK: "Storybook",
  REACT_QUERY: "React Query",
  PYTHON: "Python",
  FLASK: "Flask",
  OAUTH: "OAuth",
  PLAID: "Plaid API",
  TRPC: "tRPC",
};

export type TechStackProps = {
  technologies: Technology[];
  className?: string;
};

export const TechStack: React.FC<TechStackProps> = (props) => {
  return (
    <ul className={cn("flex flex-wrap gap-x-1.5 gap-y-2 mt-4", props.className)}>
      {props.technologies.map((technology) => (
        <li key={technology}>
          <div className="px-3 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 rounded-full leading-5">
            {technologyMap[technology]}
          </div>
        </li>
      ))}
    </ul>
  );
};
