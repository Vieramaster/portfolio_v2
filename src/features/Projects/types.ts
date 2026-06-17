

export interface Project {
    title: string;
    description: string;
    images: string;
    imageAlt?: string;
    url: string;
    github: string;
    techs: readonly string[];
}
