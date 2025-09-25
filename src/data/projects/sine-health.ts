import type { ProjectData } from '../types';

export const sineHealthData: ProjectData = {
  title: 'Sine Health',
  category: 'Physical Product Design',
  timeline: 'Ongoing • 2024',
  description: 'Sine Health is a wearable system developed for my final major project at Brunel University. It helps emergency service workers regulate their breathing under stress using discreet haptic feedback. By guiding users toward their optimal breathing rate, the device improves heart rate variability - a key marker of resilience and recovery. The project combined user research with police officers, prototyping of multi-motor haptic arrays, and testing of biofeedback methods to create a practical tool for high-pressure environments.',
  hero: '/projects/sine-health/hero.png',
  links: [
    { label: 'View Online', url: 'https://sinehealth.co.uk/' },
  ],
  
  contentBlocks: [
    
    {
      type: 'text-image',
      layout: 'split-right',
      data: {
        heading: 'The problem',
        text: 'Police officers and other emergency service workers are required to cycle rapidly between moments of rest and intense stress. The unpredictable and often traumatic nature of their work places sustained pressure on their bodies and minds, leaving them vulnerable to burnout, reduced performance, and long-term mental health challenges.',
        image: '/projects/sine-health/problem.jpeg',
        imageAlt: 'Comparison of current biofeedback solutions'
      }
    },

    {
      type: 'banner-image',
      data: {
        image: '/projects/sine-health/police-officer.jpeg',
        caption: 'One in five UK Police Officers have experienced PTSD',
        overlay: true
      }
    },
    
    
    {
      type: 'text-image',
      layout: 'split-left',
      data: {
        heading: 'The Solution Gap',
        text: 'Existing therapeutic device solutions take up audio or visual sensory channels, limiting their use during activities like driving, training, or exercising. Most devices require constant attention and can\'t provide subtle, continuous guidance for stress management.',
        image: '/projects/sine-health/problem-analysis.jpg',
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
            src: '/projects/sine-health/image-1 - Copy.png',
            alt: 'Device worn on wrist',
          },
          {
            src: '/projects/sine-health/Untitled-1.png',
            alt: 'Mobile app interface',
          },
          {
            src: '/projects/sine-health/vibration motor focus.png',
            alt: 'Mobile app interface',
          },
        ]
      }
    },
    {
      type: 'banner-image',
      data: {
        image: '/projects/sine-health/diagram.png',
        caption: 'Early prototype testing',
        overlay: false
      }
    },
    
    {
      type: 'image-grid',
      layout: 'grid-2x2',
      data: {
        heading: 'Final Product',
        images: [
          {
            src: '/projects/sine-health/image-2.png',
            alt: 'Device worn on wrist',
            caption: 'Builds resilience during training'
          },
          {
            src: '/projects/sine-health/image-3.png',
            alt: 'Mobile app interface',
            caption: 'Improves recovery and sleep'
          },
        ]
      }
    },

    {
      type: 'banner-image',
      data: {
        heading: 'Prototype',
        image: '/projects/sine-health/prototype-2.JPG',
        caption: 'Early prototype testing',
        overlay: false
      }
    },
    
    {
      type: 'metrics-results',
      data: {
        metrics: [
          { value: '75%', label: 'Reduction in perceived stress', trend: 'down' },
          { value: '12%', label: 'Improvement in HRV scores within 5 minutes', trend: 'up' },
          { value: '4%', label: 'Decrease in heart rate within 5 minutes', trend: 'down' },
        ],
        description: 'Results from lab-conditions study with 4 participants using prototype devices'
      }
    },

    {
      type: 'image-grid',
      layout: 'masonry',
      data: {
        heading: 'Development Process',
        images: [
          {
            src: '/projects/sine-health/early sketches.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/sketch-page-1.jpg',
            alt: 'Early prototype testing'
          },
          {
            src: '/projects/sine-health/sketch-page-2.jpg',
            alt: 'Circuit board development'
          },
          {
            src: '/projects/sine-health/prototype-1.jpg',
            alt: 'Wearable form factor iterations'
          },
          {
            src: '/projects/sine-health/sketch.png',
            alt: 'Wearable form factor iterations'
          },
          {
            src: '/projects/sine-health/prototype-2 - Copy.JPG',
            alt: 'Wearable form factor iterations'
          },
          {
            src: '/projects/sine-health/test-results.jpg',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/single-sketch.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/Screenshot 2025-08-20 161139.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/Sine procreate drawing.jpg',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/Screenshot 2025-08-13 120942.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/Product Explanation page sketch.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/flow-lines.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/prototype construction.png',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/IMG_3405.JPG',
            alt: 'User testing session'
          },
          {
            src: '/projects/sine-health/image-5.JPG',
            alt: 'User testing session'
          },
        ]
      }
    },
    

  ]
};