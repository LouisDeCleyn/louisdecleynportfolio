export interface ProjectLink {
  label: string;
  url: string;
}

// --- Content Block Types ---

export interface TextImageBlock {
  type: 'text-image';
  layout?: 'split-left' | 'split-right';
  data: {
    heading: string;
    text: string;
    image: string;
    imageAlt: string;
    aspectRatio?: string;
  };
}

export interface BannerImageBlock {
  type: 'banner-image';
  layout?: never;
  data: {
    heading?: string;
    image: string;
    caption?: string;
    overlay?: boolean;
  };
}

export interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageGridBlock {
  type: 'image-grid';
  layout?: 'grid-1-col' | 'grid-2-col' | 'two-column' | 'grid-2x2' | 'grid-3-col' | 'three-column' | 'grid-4-col' | 'four-column' | 'masonry';
  data: {
    heading?: string;
    aspectRatio?: string;
    images: ImageItem[];
  };
}

export interface MetricItem {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface MetricsResultsBlock {
  type: 'metrics-results';
  layout?: never;
  data: {
    heading?: string;
    description?: string;
    metrics: MetricItem[];
  };
}

export interface SlideItem {
  image: string;
  caption: string;
  description: string;
}

export interface SlideshowBlock {
  type: 'slideshow';
  layout?: never;
  data: {
    heading?: string;
    slides: SlideItem[];
  };
}

export interface CalloutItem {
  x: number;
  y: number;
  text: string;
}

export interface DiagramBlock {
  type: 'diagram';
  layout?: never;
  data: {
    heading?: string;
    image: string;
    description?: string;
    callouts?: CalloutItem[];
  };
}

export interface TextColumnItem {
  subheading: string;
  items: string[];
}

export interface TextColumnsBlock {
  type: 'text-columns';
  layout?: 'two-column' | 'three-column';
  data: {
    heading?: string;
    columns: TextColumnItem[];
  };
}

export interface QuoteTestimonialBlock {
  type: 'quote-testimonial';
  layout?: never;
  data: {
    quote: string;
    author: string;
    image?: string;
  };
}

export interface VideoBlock {
  type: 'video' | 'animation-showcase';
  layout?: never;
  data: {
    heading?: string;
    video?: string;
    animation?: string;
    controls?: boolean;
    autoplay?: boolean;
    description?: string;
  };
}

export interface ProcessStep {
  number: string | number;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStepsBlock {
  type: 'process-steps';
  layout?: never;
  data: {
    heading?: string;
    steps: ProcessStep[];
  };
}

export interface PhotoItem {
  src: string;
  alt: string;
}

export interface ProcessPhotosBlock {
  type: 'process-photos';
  layout?: never;
  data: {
    heading?: string;
    photos: PhotoItem[];
  };
}

export interface CtaButton {
  label: string;
  url: string;
  style: 'primary' | 'secondary';
  external?: boolean;
}

export interface CallToActionBlock {
  type: 'call-to-action';
  layout?: never;
  data: {
    heading: string;
    text: string;
    buttons: CtaButton[];
  };
}

export type ContentBlock =
  | TextImageBlock
  | BannerImageBlock
  | ImageGridBlock
  | MetricsResultsBlock
  | SlideshowBlock
  | DiagramBlock
  | TextColumnsBlock
  | QuoteTestimonialBlock
  | VideoBlock
  | ProcessStepsBlock
  | ProcessPhotosBlock
  | CallToActionBlock;

// --- Project Types ---

export type ProjectTheme = 'product-design' | 'ui-ux' | 'strategy' | 'research' | 'physical';

export interface ProjectData {
  title: string;
  category: string;
  timeline: string;
  description: string;
  hero: string;
  links: ProjectLink[];
  theme?: ProjectTheme;
  contentBlocks?: ContentBlock[];
}

