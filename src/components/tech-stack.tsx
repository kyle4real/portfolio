import { cn } from "@/lib/utils";

export type TechStackProps = {
  technologies: string[];
  className?: string;
};

export const TechStack: React.FC<TechStackProps> = (props) => {
  return (
    <ul className={cn("flex flex-wrap gap-x-1.5 gap-y-2 mt-4", props.className)}>
      {props.technologies.map((technology) => (
        <li key={technology}>
          <div className="px-3 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 rounded-full leading-5">
            {technology}
          </div>
        </li>
      ))}
    </ul>
  );
};
