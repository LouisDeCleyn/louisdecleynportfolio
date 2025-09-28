import type { ProjectData } from '../types';

export const stylIdeasData: ProjectData = {
  title: 'Stylideas',
  category: 'Physical Product Design',
  timeline: '1 Year • 2022',
  description: 'During my placement year at Stylideas, I worked on the development of the Clear View Shower Mirror, a heated, fog-free mirror designed for everyday use. I contributed to the product’s evolution from concept through to manufacture, supporting both design and engineering decisions while balancing user needs, technical feasibility, and cost. This experience gave me hands-on exposure to the full product development process within a fast-paced consumer brand, strengthening my skills in prototyping, problem-solving, and collaborating across disciplines to bring a product successfully to market.',
  hero: '/projects/stylideas/hero.jpg',
  problem: 'Develop innovative mirror concept, capitalising on amazon mirror trends.',
  process: 'Conducted user research, developed and tested working prototypes.',
  outcome: 'Clear View mirror is now sold across many major retailors such as QVC and Boots.',
  links: [
    { label: 'View Online', url: 'https://stylpro.co.uk/products/stylpro-anti-fog-heated-bathroom-mirror' },
  ],

  contentBlocks: [
    
    {
      type: 'banner-image',
      data: {
        image: '/projects/stylideas/Extended Stylideas mirror image.jpg',
        caption: 'Cadence Colourways',
        overlay: false
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
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    {
      type: 'banner-image',
      data: {
        heading: 'Development Process',
        image: '/projects/stylideas/image-2.jpg',
        caption: 'Cadence Colourways',
        overlay: false
      }
    },
    
    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        
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
          {
            src: '/projects/stylideas/Shower mirror CAD early mockup image exploded view 2.png',
            alt: 'Wearable form factor iterations'
          },
          {
            src: '/projects/stylideas/Shower mirror CAD early mockup image.png',
            alt: 'Wearable form factor iterations'
          },
          {
            src: '/projects/stylideas/StylIdeas_14-06-24-016_LR.jpg',
            alt: 'User testing session'
          },
          {
            src: '/projects/stylideas/Untitled_Artwork.webp',
            alt: 'User testing session'
          },
          {
            src: '/projects/stylideas/Shower mirror CAD early mockup image back.png',
            alt: 'User testing session'
          },
        
          
        ]
      }
    },
    {
      type: 'image-grid',
      layout: 'grid-3-col',
      data: {
        heading: 'Further Projects',
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