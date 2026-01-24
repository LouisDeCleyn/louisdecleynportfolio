import type { ProjectData } from '../types';

export const hearthLampData: ProjectData = {
    title: 'Hearth Lamp',
    category: 'Product Design',
    timeline: '2 Months • 2025',
    description: '3D printed lamp design extending the Hearth product family and brand language. The Hearth Lamp is designed to adapt the setting through the physical positioning of the lamp.',
    hero: '/projects/hearth-lamp/hero.png',
    links: [],
    
    contentBlocks: [
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        heading: 'Adaptable By Design',
        text: 'The lamp is designed to adopt three different positions allowing users to create the desired ambience.',
        image: '/projects/hearth-lamp/hero.png',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        heading: 'Three Positions',
        aspectRatio: '1/1', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/hearth-lamp/position1.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/position2.png',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/hearth-lamp/position3.png',
            alt: 'Mobile app interface',
          },
        ]
      }
    },

    {
      type: 'text-image',
      layout: 'split-left',
      data: {
        heading: 'Small Batch Manufacture',
        text: 'The lamp was designed to be produced in a small batch, 3D printed and assembled at home.',
        image: '/projects/hearth-lamp/singlelamp.jpg',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        aspectRatio: '16/9',
        images: [
          {
            src: '/projects/hearth-lamp/threelamps.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/Logo Banner.png',
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
            src: '/projects/hearth-lamp/Prototypes 1.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/process1.jpg',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/process2.jpg',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/process3.jpg',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/process4.jpg',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/hearth-lamp/process5.jpg',
            alt: 'Device worn on wrist',
          },
        ]
      }
    },
    
    
    ]
   
    
  }