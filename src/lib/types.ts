// Types
export interface ButtonLinkProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

export interface JobItemProps {
    job: {
        role: string;
        company: string;
        period: string;
        color: string;
    };
}

export interface TechStackItemProps {
    Icon: React.ElementType;
    name: string;
    description: string;
}

export interface IProject {
    id: string;
    title: string;
    description: string;
    technology: {
        name: string;
        icon: React.ReactNode;
    }[];
    code?: string;
    website_link: string;
    website_label: string;
}