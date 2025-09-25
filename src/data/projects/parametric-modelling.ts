import type { ProjectData } from '../types';

export const parametricModellingData: ProjectData = {
  title: 'Parametric Modelling',
  category: 'Skill Highlight',
  timeline: 'Ongoing • 2025',
  description: 'Ongoing exploration of parametric modelling techniques, alongside applying learnings to create product concepts.',
  hero: '/projects/parametric-modelling/hero.png',
  links: [],
  
  contentBlocks: [
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        heading: 'A Different Way to Think About Form',
        text: 'My journey began with Grasshopper for Rhino, learning to think in parameters rather than coordinates. Each project teaches new ways to encode design intent. The real skill isn\'t in the software, but in developing an algorithmic mindset.',
        image: '/projects/parametric-modelling/Screenshot 2025-08-04 120140.png',
        imageAlt: 'Complex Grasshopper definition showing node-based logic'
      }
    
    
    },

    {
      type: 'banner-image',
      data: {
        image: '/projects/parametric-modelling/grasshopper-process.png',
        caption: 'Early prototype testing',
        overlay: false
      }
    },
    
    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        heading: 'Renders',
        images: [
          {
            src: '/projects/parametric-modelling/image-1.png',
            alt: 'Algorithmic chair design',
          },
          {
            src: '/projects/parametric-modelling/image-2.png',
            alt: 'Parametric facade system',
          },
          {
            src: '/projects/parametric-modelling/image-3.png',
            alt: 'Generative jewelry',
          },
          {
            src: '/projects/parametric-modelling/image-4.png',
            alt: 'Generative jewelry',
          },
          {
            src: '/projects/parametric-modelling/image-5.png',
            alt: 'Generative jewelry',
          },
          {
            src: '/projects/parametric-modelling/image-6.png',
            alt: 'Generative jewelry',
          }
        ]
      }
    }


  ]
};