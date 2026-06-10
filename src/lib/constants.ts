import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Team', href: '/about#team' },
      { label: 'Timeline', href: '/about#timeline' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Shiksha Setu (Education)', href: '/programs/shiksha-setu' },
      { label: 'Swasthya Sathi (Health)', href: '/programs/swasthya-sathi' },
      { label: 'Shakti Udaan (Women)', href: '/programs/shakti-udaan' },
      { label: 'Samudayik Vikas', href: '/programs/samudayik-vikas' },
      { label: 'Harit Dharti (Environment)', href: '/programs/harit-dharti' },
      { label: 'Digital Saksharta', href: '/programs/digital-saksharta' },
    ],
  },
  { label: 'Impact', href: '/impact' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Donate', href: '/get-involved#donate' },
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Partner With Us', href: '/get-involved#partner' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/ekagrahsevafoundation',
  linkedin: 'https://linkedin.com/company/ekagrah-foundation',
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  programs: '/programs',
  impact: '/impact',
  getInvolved: '/get-involved',
  contact: '/contact',
  donate: '/get-involved#donate',
  volunteer: '/get-involved#volunteer',
  partner: '/get-involved#partner',
} as const;
