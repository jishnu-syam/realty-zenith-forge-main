export type HeroSlide = {
  id: string;
  eyebrow: string | null;
  title: string;
  subtitle: string | null;
  image_url: string;
  cta_label: string | null;
  cta_href: string | null;
  position: number;
  published: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  position: number;
  published: boolean;
};

export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  area: string | null;
  plot_size: string;
  price: string | null;
  badge: string | null;
  description: string;
  long_description: string | null;
  image_url: string;
  gallery_urls: string[] | null;
  features: string[] | null;
  status: string;
  featured: boolean;
  published: boolean;
  position: number;
};

export type Testimonial = {
  id: string;
  author_name: string;
  author_role: string | null;
  quote: string;
  avatar_url: string | null;
  position: number;
  published: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author: string | null;
  category: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
};

export type GalleryImage = {
  id: string;
  image_url: string;
  caption: string | null;
  position: number;
  published: boolean;
};

export type Area = {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  highlights: string[] | null;
  position: number;
  published: boolean;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  position: number;
  published: boolean;
};

export type SiteSettingValue = Record<string, string>;
