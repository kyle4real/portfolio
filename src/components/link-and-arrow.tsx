import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
import { forwardRef } from "react";

type LinkAndArrowProps = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkAndArrow = forwardRef<HTMLAnchorElement, LinkAndArrowProps>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className={cn(
        "text-base group/link focus-visible:text-blue-300 hover:text-blue-300 text-zinc-200 leading-tight font-medium items-baseline inline-flex",
        props.className
      )}
    >
      <span>
        {props.children}
        <ArrowUpRight className="ml-1.5 inline-block size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
      </span>
    </a>
  );
});
