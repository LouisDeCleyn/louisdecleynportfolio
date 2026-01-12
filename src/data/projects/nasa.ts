import type { ProjectData } from '../types';

export const nasaData: ProjectData = {
  title: 'NASA',
  category: 'Product Concept',
  timeline: '2024',
  description: 'This university project tasked teams to select a brand and design a repositioning proposal for the company set ten years in the future. As a group of five we selected NASA and created a future brand direction proposing NASA transitions into consumer healthcare products help extend quality of life. ',
  hero: '/projects/nasa/Device in Hand_2.jpg',
  links: [
    
  ],
  
  contentBlocks: [
    
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        aspectRatio: '1/1',
        heading: 'One in five UK Police Officers have experienced PTSD',
        text: 'Police officers and other emergency service workers are required to cycle rapidly between moments of rest and intense stress. The unpredictable and often traumatic nature of their work places sustained pressure on their bodies and minds, leaving them vulnerable to burnout, reduced performance, and long-term mental health challenges.',
        image: '/projects/nasa/Device in Hand.jpg',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    
    {
      type: 'text-image',
      layout: 'split-left',
      data: {
        heading: 'The Solution Gap',
        text: 'Existing therapeutic device solutions take up audio or visual sensory channels, limiting their use during activities like driving, training, or exercising. Most devices require constant attention and can\'t provide subtle, continuous guidance for stress management.',
        image: '/projects/nasa/Untitled_Artwork 6.jpg',
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
            src: '/projects/nasa/Device in Hand_2.jpg',
            alt: 'Layed out sketches',
          },
          
        ]
      }
    },

    {
      type: 'image-grid',
      layout: 'grid-1-col',
      data: {
        aspectRatio: '16/9',
        images: [
          {
            src: '/projects/nasa/process1.JPG',
            alt: 'Layed out sketches',
          },
          {
            src: '/projects/nasa/process2.JPG',
            alt: 'Layed out sketches',
          },
          
          {
            src: '/projects/nasa/process3.jpg',
            alt: 'sine lay on table',
          },
          {
            src: '/projects/nasa/process4.JPG',
            alt: 'User testing session'
          },
          {
            src: '/projects/nasa/process5.JPG',
            alt: 'prototype building',
          },
          {
            src: '/projects/nasa/process6.JPG',
            alt: 'Device worn on wrist',
          },
        ]
      }
    },
    

  ]
};