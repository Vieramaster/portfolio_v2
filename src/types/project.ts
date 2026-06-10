export interface ProjectImages {
    desktop: string;
    mobile: string;
}

export interface Project {
    title: string;
    description: string;
    images: ProjectImages;
    imageAlt?: string;
    url: string;
    github: string;
    techs: readonly string[];
}
