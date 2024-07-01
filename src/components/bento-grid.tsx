import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { TextEncrypted } from "./text-encrypted";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name?: string;
  className: string;
  background?: ReactNode;
  Icon?: any;
  description?: string;
  href?: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl ",
      "bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="z-10 flex transform-gpu flex-col gap-1 px-4 py-4 transition-all duration-300 group-hover:-translate-y-2 sm:px-6">
      <Button
        variant="outline"
        asChild
        size="icon"
        className="mb-2 rounded-full p-2"
      >
        <Icon className="size-4 origin-left transform-gpu text-neutral-200 transition-all duration-300 ease-in-out group-hover:scale-75" />
      </Button>
      {name && <TextEncrypted interval={100} text={name} />}
      <p className=" text-sm text-neutral-400">{description}</p>
      {cta && href && (
        <Button variant="outline" asChild size="sm">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
    <div className="">{background}</div>
  </div>
);

export { BentoCard, BentoGrid };
