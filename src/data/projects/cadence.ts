import type { ProjectData } from '../types';

export const cadenceData: ProjectData = {
    title: 'Cadence',
    category: 'Product Concept',
    timeline: '1 months • 2025',
    description: 'Cadence is a flow-based exercise timer I designed to help users find rhythm in their workouts. Using a simple LED sequence, it guides periods of movement and rest without distraction, creating a more intuitive alternative to conventional timers. The project explored how light and pacing can shape focus, flow, and performance.',
    hero: '/projects/cadence/hero.png',
    links: [],

 contentBlocks: [
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        aspectRatio: '9/5',
        heading: 'The Opportunity',
        text: 'Traditional exercise timers are rigid and distracting, often breaking focus instead of supporting it. For flow-based exercise, where rhythm and continuity matter, users need a simple, intuitive way to pace movement and rest without relying on sound or constant clock-checking.',
        image: '/projects/cadence/in-context-1.png',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/hero-2.webp',
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
        image: '/projects/cadence/downward-dog.webp',
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
            src: '/projects/cadence/image-1.webp',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/cadence/image-2.webp',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/cadence/image-3.webp',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        heading: 'Material 3 Design System',
        text: 'Cadence uses the Googls Material 3 Design system for a playful and expressive interface experience. The design system was selected for its modern, energetic feel and its adaptability, enabling it to fit circular screens.',
        image: '/projects/cadence/Twisting dial.bip.85.png',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'banner-image',
      data: {
        image: '/projects/cadence/banner.webp',
        overlay: false
      }
    },

     {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        heading: 'Development Process',
        aspectRatio: '16/9', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/cadence/image-4.webp',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/cadence/process banner.webp',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/cadence/IMG_7006.jpg',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/cadence/development/development.jpg',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    
    

    

  ]


  }