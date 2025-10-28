export interface ProjectLink {
  label: string;
  url: string;
}

export interface ContentBlock {
  type: string;
  data: any;
  layout?: string;
}

export interface ProjectData {
  title: string;
  category: string;
  timeline: string;
  description: string;
  hero: string;
  links: ProjectLink[];
  contentBlocks?: ContentBlock[];
}

export type ProjectSlug = 
  | 'sine-health' 
  | 'stylideas' 
  | 'cadence' 
  | 'parametric-modelling' 
  | 'hearth'
  
export type ProjectDataMap = Record<ProjectSlug, ProjectData>;