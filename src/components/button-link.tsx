import { ButtonLinkProps } from "@/lib/types";
import { Button } from "@/components/ui/button";
import React from "react";

const ButtonLink = ({ href, icon: Icon, label }: ButtonLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full"
    >
        <Button variant="outline" size="sm" className="flex gap-1 w-full">
            {Icon && <Icon className="size-4" />}
            <span className="text-sm">{label}</span>
        </Button>
    </a>
);

export { ButtonLink };