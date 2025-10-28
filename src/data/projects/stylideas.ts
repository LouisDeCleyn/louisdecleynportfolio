import type { ProjectData } from '../types';

export const stylIdeasData: ProjectData = {
  title: 'Stylideas',
  category: 'Physical Product Design',
  timeline: '1 Year • 2022',
  description: 'During my placement year at Stylideas, I worked on the development of the Clear View Shower Mirror, a heated, fog-free mirror designed for everyday use. I contributed to the product’s evolution from concept through to manufacture, supporting both design and engineering decisions while balancing user needs, technical feasibility, and cost. This experience gave me hands-on exposure to the full product development process within a fast-paced consumer brand, strengthening my skills in prototyping, problem-solving, and collaborating across disciplines to bring a product successfully to market.',
  hero: '/projects/stylideas/hero.jpg',
  links: [
    { label: 'View Online', url: 'https://stylpro.co.uk/products/stylpro-anti-fog-heated-bathroom-mirror' },
  ],

  contentBlocks: [
    

    {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        aspectRatio: '16/9', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/stylideas/Extended Stylideas mirror image.jpg',
            alt: 'Device worn on wrist',
          },

        ]
      }
    },
    
    {
      type: 'text-image',
      layout: 'split-left',
      data: {
        heading: 'Clear View Heated Shower Mirror',
        text: ' The Clear View Shower Mirror uses a heated mirror surface to rapidly de-fog the mirror during a shower. The mirror can attach to both horizontal and vertical surfaces for flexibility during use.',
        image: '/projects/stylideas/image-3.webp',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        aspectRatio: '1', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/stylideas/demist-1.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/stylideas/demist-2.png',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/stylideas/demist-3.png',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/stylideas/image-1.jpeg',
        overlay: false
      }
    },
    {
      type: 'banner-image',
      data: {
        heading: 'Development Process',
        image: '/projects/stylideas/image-2.jpg',
        overlay: false
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-2-col',
      data: {
        aspectRatio: '4/3', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/stylideas/digisketches.PNG',
            alt: 'User testing session'
          },
          {
            src: '/projects/stylideas/IMG-20240720-WA0004 BW.jpg',
            alt: 'Early prototype testing'
          },
          {
            src: '/projects/stylideas/IMG-20240720-WA0008.jpg',
            alt: 'Circuit board development'
          },
          {
            src: '/projects/stylideas/IMG-20240720-WA0001.jpg',
            alt: 'Wearable form factor iterations'
          },
          
        ]
      }
    },
    
    
    
    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        heading: 'Projects worked on',
        aspectRatio: '1', // or '1', '4/3', '3/2', etc.
        images: [
          {
            src: '/projects/stylideas/93294abf-88ed-4856-9ee8-b8e2a417c46e.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/stylideas/dcijvj3a.png',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/stylideas/IMG_6017_shopify.webp',
            alt: 'Mobile app interface',
          },
        ]
      }
    },

    

  ]
};