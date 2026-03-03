// src/data/projects/index.ts
import type { ProjectData } from '../types';

import { parametricModellingData } from './parametric-modelling';
import { stylIdeasData } from './stylideas';
import { sineHealthData } from './sine-health';
import { cadenceData } from './cadence';
import { hearthData } from './hearth';
import { nasaData } from './nasa';
import { hearthLampData } from './hearth-lamp';

const projectRegistry = {
  'hearth-lamp': hearthLampData,
  'sine-health': sineHealthData,
  'stylideas': stylIdeasData,
  'cadence': cadenceData,
  'parametric-modelling': parametricModellingData,
  'hearth': hearthData,
  'nasa': nasaData,
} satisfies Record<string, ProjectData>;

// Derived from registry keys — no manual maintenance needed
export type ProjectSlug = keyof typeof projectRegistry;

// Controls display order on the homepage and prev/next navigation
export const projectOrder: ProjectSlug[] = [
  'hearth-lamp',
  'sine-health',
  'stylideas',
  'cadence',
  'parametric-modelling',
  'hearth',
];

export function getProject(slug: string): ProjectData | null {
  return (projectRegistry as Record<string, ProjectData>)[slug] ?? null;
}

export function getProjectNavigation(currentSlug: string) {
  const currentIndex = projectOrder.indexOf(currentSlug as ProjectSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (currentIndex + 1) % projectOrder.length;

  return {
    prev: { slug: projectOrder[prevIndex], data: projectRegistry[projectOrder[prevIndex]] },
    next: { slug: projectOrder[nextIndex], data: projectRegistry[projectOrder[nextIndex]] },
  };
}

export function getAllProjects(): Array<{ slug: ProjectSlug; data: ProjectData }> {
  return projectOrder.map(slug => ({ slug, data: projectRegistry[slug] }));
}
