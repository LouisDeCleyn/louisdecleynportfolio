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
  // New modular content system
  contentBlocks?: ContentBlock[];
  // Legacy support for existing simple projects
  problem?: string;
  process?: string;
  outcome?: string;
  images?: string[];
}

export type ProjectSlug = 
  | 'sine-health' 
  | 'stylideas' 
  | 'cadence' 
  | 'parametric-modelling' 
  | 'hearth'
  | 'art-projects'
  | 'making-projects'
  
export type ProjectDataMap = Record<ProjectSlug, ProjectData>;