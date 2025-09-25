import type { ProjectData } from '../types';

export const artProjectsData: ProjectData = {
  title: 'Sketching',
  category: 'Skill Highlight',
  timeline: 'Ongoing • 2019',
  description: 'Sketching, drawing and painting - from design to portraits',
  hero: '/projects/art-projects/hero.jpg',
  links: [],
  
  contentBlocks: [
    
    {
      type: 'image-grid',
      layout: 'masonry',
      data: {
        heading: 'Art',
        images: [
          {
            src: '/projects/art-projects/dracula.jpg',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/oldman.png',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/rob-art.jpg',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/IMG_1622.JPG',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/IMG_5919.JPG',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/IMG_1461.JPG',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/art-projects/IMG_3901.JPG',
            alt: 'Algorithmic chair design',
          },

        ]
      }
    },



  ]
};