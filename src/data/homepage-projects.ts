// src/data/homepage-projects.ts
// Project data for homepage display

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  hero: string;
}

export interface Project extends ProjectData {
  slug: string;
}

export const projectData: Record<string, ProjectData> = {
  'sine-health': {
    title: 'Sine Health',
    category: 'Physical Product Design',
    description: 'A comprehensive case study of designing and developing an innovative sustainable water bottle.',
    hero: '/projects/sine-health/hero.png'
  },
  'stylideas': {
    title: 'Stylideas',
    category: 'Physical Product Design',
    description: 'A digital experience design project focused on user research and interface design.',
    hero: '/projects/stylideas/hero.jpg'
  },
  'cadence': {
    title: 'Cadence',
    category: 'Product Concept',
    description: 'A strategic workshop series designed to foster innovation and collaboration.',
    hero: '/projects/cadence/hero.png'
  },
  'parametric-modelling': {
    title: 'Parametric Modelling',
    category: 'Skill Highlight',
    description: 'End-to-end design of a learning platform focused on user engagement.',
    hero: '/projects/parametric-modelling/hero.png'
  },
  'hearth': {
    title: 'Hearth',
    category: 'Brand Design',
    description: 'End-to-end design of a learning platform focused on user engagement.',
    hero: '/projects/hearth/hero.png'
  },
};

export const projects: Project[] = Object.entries(projectData).map(([slug, data]) => ({
  slug,
  ...data
}));