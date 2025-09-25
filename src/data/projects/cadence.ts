import type { ProjectData } from '../types';

export const cadenceData: ProjectData = {
    title: 'Cadence',
    category: 'Product Concept',
    timeline: '1 months • 2025',
    description: 'Cadence is a flow-based exercise timer I designed to help users find rhythm in their workouts. Using a simple LED sequence, it guides periods of movement and rest without distraction, creating a more intuitive alternative to conventional timers. The project explored how light and pacing can shape focus, flow, and performance.',
    hero: '/projects/cadence/hero.png',
    images: [
      '/projects/cadence/image-1.png',
      '/projects/cadence/image-2.png',
      '/projects/cadence/image-3.png',
      '/projects/cadence/image-4.jpg',
      '/projects/cadence/image-5.png',
    ],
    links: [],

 contentBlocks: [
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        heading: 'The Opportunity',
        text: 'Traditional exercise timers are rigid and distracting, often breaking focus instead of supporting it. For flow-based exercise, where rhythm and continuity matter, users need a simple, intuitive way to pace movement and rest without relying on sound or constant clock-checking.',
        image: '/projects/cadence/eUyc3vvgALpPpVYZrYGYZX.jpg',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/hero-2.png',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    {
      type: 'image-grid',
      layout: 'grid-2x2',
      data: {
        aspectRatio: '9/5', // or '1', '4/3', '3/2', etc.
        heading: 'How It Works',
        images: [
          {
            src: '/projects/cadence/cadence how it works diagram 2.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/cadence/cadence how it works diagram.png',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    
    {
      type: 'text-image',
      layout: 'split-left',
      data: {
        heading: 'Cadence: Find Your Flow',
        text: 'Cadence assist the user in finding a balance between structured workouts and stretching routines - allowing flow between positions. The use of ambient light to guide also means that the status of the timer can be viewed from any position.',
        image: '/projects/cadence/downward-dog.png',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        aspectRatio: '8/6', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/cadence/image-1.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/cadence/image-2.png',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/cadence/image-3.png',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/interaction.jpg',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/banner.jpg',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/image-4.jpg',
        heading: 'Development Process',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/process banner.png',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/development/development.jpg',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },

    

  ]


  }