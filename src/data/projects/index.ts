// src/data/projects/index.ts
import type { ProjectDataMap, ProjectSlug, ProjectData } from '../types';

// Import individual project data (only the ones that exist)
import { parametricModellingData } from './parametric-modelling';
import { stylIdeasData } from './stylideas';
import { sineHealthData } from './sine-health';
import { cadenceData } from './cadence';
import { hearthData } from './hearth';
import { nasaData } from './nasa';
import { hearthLampData } from './hearth-lamp';

// Simple mapping - include inline definitions for projects not yet separated
const projectRegistry: ProjectDataMap = {
  'parametric-modelling': parametricModellingData,
  'stylideas': stylIdeasData,
  'sine-health': sineHealthData,
  'cadence': cadenceData,
  'hearth': hearthData,
  'nasa': nasaData,
  'hearth-lamp': hearthLampData,
};

export const projectOrder: ProjectSlug[] = [
  'hearth-lamp',
  'sine-health', 
  'stylideas', 
  'cadence', 
  'parametric-modelling', 
  'hearth',
  'nasa',
];

// Utility functions
export function getProject(slug: string): ProjectData | null {
  return projectRegistry[slug as ProjectSlug] || null;
}

export function getProjectNavigation(currentSlug: string) {
  const currentIndex = projectOrder.indexOf(currentSlug as ProjectSlug);
  if (currentIndex === -1) return { prev: null, next: null };
  
  const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (currentIndex + 1) % projectOrder.length;
  
  return {
    prev: {
      slug: projectOrder[prevIndex],
      data: projectRegistry[projectOrder[prevIndex]]
    },
    next: {
      slug: projectOrder[nextIndex], 
      data: projectRegistry[projectOrder[nextIndex]]
    }
  };
}

export function getAllProjects(): Array<{ slug: ProjectSlug; data: ProjectData }> {
  return projectOrder.map(slug => ({ slug, data: projectRegistry[slug] }));
}