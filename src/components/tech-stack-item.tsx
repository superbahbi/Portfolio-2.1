import { TechStackItemProps } from "@/lib/types";

const TechStackItem = ({ Icon, name, description }: TechStackItemProps) => (
    <div className="flex gap-2">
        <div className="flex rounded-md border border-dashed border-border bg-transparent p-3">
            <Icon className="size-5" />
        </div>
        <div className="flex flex-col justify-center">
            <span>{name}</span>
            <p className="text-left text-xs tracking-tighter text-muted-foreground">
                {description}
            </p>
        </div>
    </div>
);

export { TechStackItem };