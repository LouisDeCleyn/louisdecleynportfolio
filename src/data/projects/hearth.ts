import type { ProjectData } from '../types';

export const hearthData: ProjectData = {
    title: 'Hearth',
    category: 'Brand Design',
    timeline: '1 Month • 2024',
    description: 'Designed branded products for small-batch manufacture as personal gifts for friends and family.',
    hero: '/projects/hearth/hero.png',
    links: [],
    
    contentBlocks: [
    
    {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        aspectRatio: '16/9',
        images: [
          {
            src: '/projects/hearth/image-1.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth/image-3.jpg',
            alt: 'Device worn on wrist',
          },
          
        ]
      }
    },
    {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        heading: 'Process',
        aspectRatio: '16/9',
        images: [
          {
            src: '/projects/hearth/process1.jpg',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth/process2.jpg',
            alt: 'Device worn on wrist',
          },
          
        ]
      }
    },
    
    
    ]
   
    
  }