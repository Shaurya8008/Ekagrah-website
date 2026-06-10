## Design System: Ekagrah Seva Foundation

### Pattern
- **Name:** Hero + Testimonials + CTA
- **Conversion Focus:** Social proof before CTA. Use 3-5 testimonials. Include photo + name + role. CTA after social proof.
- **CTA Placement:** Hero (sticky) + Post-testimonials
- **Color Strategy:** Hero: Brand color. Testimonials: Light bg #F5F5F5. Quotes: Italic, muted color #666. CTA: Vibrant
- **Sections:** 1. Hero, 2. Problem statement, 3. Solution overview, 4. Testimonials carousel, 5. CTA

### Stylel
- **Name:** Conversion-Optimized
- **Mode Support:** Light ✓ Full | Dark ✓ Full
- **Keywords:** Form-focused, minimalist design, single CTA focus, high contrast, urgency elements, trust signals, social proof, clear value
- **Best For:** E-commerce product pages, free trial signups, lead generation, SaaS pricing pages, limited-time offers
- **Performance:** ⚡ Excellent | **Accessibility:** ✓ WCAG AA

### Colors
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#E11D48` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#FB7185` | `--color-secondary` |
| Accent/CTA | `#2563EB` | `--color-accent` |
| Background | `#FFF1F2` | `--color-background` |
| Foreground | `#881337` | `--color-foreground` |
| Muted | `#F0ECF2` | `--color-muted` |
| Border | `#FECDD3` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#E11D48` | `--color-ring` |

*Notes: Vibrant rose + engagement blue*

### Typography
- **Heading:** Lexend
- **Body:** Source Sans 3
- **Mood:** corporate, trustworthy, accessible, readable, professional, clean
- **Best For:** Enterprise, government, healthcare, finance, accessibility-focused
- **Google Fonts:** https://fonts.google.com/share?selection.family=Lexend:wght@300;400;500;600;700|Source+Sans+3:wght@300;400;500;600;700
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
```

### Key Effects
Hover states on CTA (color shift, slight scale), form field focus animations, loading spinner, success feedback

### Avoid (Anti-patterns)
- Poor map UX
- Hidden costs

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

