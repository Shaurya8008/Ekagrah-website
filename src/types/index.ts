export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  category: 'education' | 'health' | 'women' | 'community' | 'environment';
  activities: string[];
  geographicFocus: string;
  isActive: boolean;
}

export interface ImpactStory {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image: string;
  tags: string[];
  publishedAt: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'donation' | 'volunteering' | 'general';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone?: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pin: string;
    country: string;
  };
  social: {
    instagram: string;
    linkedin: string;
  };
  registrations: {
    cin: string;
    type: string;
    registrationAuthority: string;
    nitiAayog: boolean;
    certification12A: boolean;
    certification80G: boolean;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
