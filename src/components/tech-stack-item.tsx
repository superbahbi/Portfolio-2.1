import { TechStackItemProps } from "@/lib/types";

const TechStackItem = ({ Icon, name, description }: TechStackItemProps) => (
  <div className="flex items-center gap-2">
    <div className="flex rounded-md border border-dashed border-border bg-transparent p-3 lg:p-2">
      <Icon className="size-5 lg:size-4" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="lg:text-xs">{name}</span>
      <p className="text-left text-xs tracking-tighter text-muted-foreground lg:hidden">
        {description}
      </p>
    </div>
  </div>
);

export { TechStackItem };
