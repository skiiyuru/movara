# Design Guidelines - Strategy Planning & Execution Firm

## Overview
Based on the PVG website analysis, these guidelines establish the visual identity and design system for our strategy planning and execution firm website.

## Brand Identity

### Core Values
- **Professional & Trustworthy**: Clean, sophisticated design that conveys expertise
- **Innovative & Forward-thinking**: Modern aesthetics with strategic thinking
- **Results-driven**: Clear, impactful messaging focused on outcomes
- **Client-centric**: Design that prioritizes user experience and client needs

## Typography

### Font Hierarchy
- **Primary Font**: Inter or system sans-serif for body text
- **Secondary Font**: A modern serif (like Playfair Display) for headlines
- **Monospace**: For code snippets or technical content

### Font Sizes
- **H1**: `3.5rem` (56px) - Main page headlines
- **H2**: `2.5rem` (40px) - Section headlines
- **H3**: `2rem` (32px) - Subsection headlines
- **H4**: `1.5rem` (24px) - Card titles
- **Body**: `1rem` (16px) - Main content
- **Small**: `0.875rem` (14px) - Captions and metadata

### Font Weights
- **Light**: 300 - Subtle text elements
- **Regular**: 400 - Body text
- **Medium**: 500 - Emphasis and subheadings
- **Semi-bold**: 600 - Section headers
- **Bold**: 700 - Main headlines

## Layout & Spacing

### Grid System
- **12-column grid** for desktop layouts
- **8-column grid** for tablet layouts
- **4-column grid** for mobile layouts
- **Gutter**: 24px between columns
- **Margin**: 80px on desktop, 40px on tablet, 20px on mobile

### Spacing Scale
- **XS**: 8px - Tight spacing
- **S**: 16px - Standard spacing
- **M**: 24px - Component spacing
- **L**: 32px - Section spacing
- **XL**: 48px - Major section spacing
- **XXL**: 64px - Page-level spacing

### Container Widths
- **Max-width**: 1200px for main content
- **Full-width**: For hero sections and backgrounds
- **Narrow**: 800px for text-heavy content

## Component Design

### Navigation
- **Style**: Clean, minimal navigation with subtle hover effects
- **Position**: Fixed top navigation with transparent background
- **Logo**: Left-aligned, scalable vector format
- **Menu Items**: Right-aligned, medium weight, 16px
- **Mobile**: Hamburger menu with slide-out panel

### Hero Sections
- **Height**: 80vh minimum for impact
- **Background**: Subtle gradients or high-quality imagery
- **Typography**: Large, bold headlines with clear hierarchy
- **CTA**: Prominent, high-contrast buttons
- **Overlay**: Subtle dark overlay on images for text readability

### Cards & Content Blocks
- **Style**: Clean, minimal cards with subtle shadows
- **Padding**: 32px internal spacing
- **Border Radius**: 8px for modern feel
- **Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)` for depth
- **Hover**: Subtle scale and shadow increase

### Buttons
- **Primary**: Solid background, high contrast
- **Secondary**: Outlined style with hover fill
- **Size**: 48px height for touch targets
- **Padding**: 16px horizontal, 12px vertical
- **Border Radius**: 6px for modern appearance

### Forms
- **Input Style**: Clean, minimal with subtle borders
- **Focus State**: Blue accent color with smooth transition
- **Validation**: Clear error states with helpful messaging
- **Spacing**: 24px between form elements

## Visual Elements

### Icons
- **Style**: Line-based, consistent stroke width
- **Size**: 24px standard, scalable for different contexts
- **Color**: Inherit text color or use accent colors
- **Library**: Feather Icons or similar minimal icon set

### Images
- **Style**: High-quality, professional photography
- **Aspect Ratios**: 16:9 for hero images, 4:3 for content
- **Optimization**: WebP format with fallbacks
- **Lazy Loading**: Implemented for performance

### Illustrations
- **Style**: Clean, minimal line art or geometric shapes
- **Color**: Brand colors with subtle gradients
- **Purpose**: Enhance content, not distract from it

## Interactive Elements

### Hover States
- **Subtle**: Scale (1.02), shadow increase, color transitions
- **Duration**: 0.2s ease-in-out for smooth interactions
- **Focus**: Clear focus indicators for accessibility

### Animations
- **Entrance**: Fade in from bottom with staggered timing
- **Scroll**: Subtle parallax effects for depth
- **Loading**: Minimal, branded loading animations

### Micro-interactions
- **Button clicks**: Subtle scale down effect
- **Form validation**: Smooth error message appearance
- **Navigation**: Smooth transitions between states

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Considerations
- **Touch targets**: Minimum 44px for interactive elements
- **Typography**: Slightly larger for readability
- **Navigation**: Simplified, accessible mobile menu
- **Images**: Optimized for mobile viewing

## Accessibility

### Standards
- **WCAG 2.1 AA** compliance
- **Color contrast**: Minimum 4.5:1 for body text
- **Keyboard navigation**: Full keyboard accessibility
- **Screen readers**: Proper semantic HTML and ARIA labels

### Implementation
- **Focus indicators**: Clear, visible focus states
- **Alt text**: Descriptive alt text for all images
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Color independence**: Information not conveyed by color alone

## Performance Guidelines

### Optimization
- **Image compression**: WebP format with appropriate sizing
- **Font loading**: Optimized font loading strategies
- **Code splitting**: Efficient JavaScript bundling
- **Caching**: Proper cache headers for static assets

### Metrics
- **Lighthouse Score**: 90+ for all categories
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Load Time**: Under 3 seconds on 3G connection

## Content Strategy

### Messaging
- **Clear value proposition** in hero sections
- **Client-focused** language and benefits
- **Social proof** through testimonials and case studies
- **Clear CTAs** with specific next steps

### Content Structure
- **Scannable** with clear headings and bullet points
- **Progressive disclosure** of information
- **Visual hierarchy** that guides user attention
- **Consistent** voice and tone throughout

## Implementation Notes

### Technology Stack
- **Framework**: Astro for static site generation
- **Styling**: Tailwind CSS for utility-first approach
- **Components**: Reusable component library
- **CMS**: Headless CMS for content management

### Development Workflow
- **Design tokens** for consistent implementation
- **Component documentation** for maintainability
- **Design system** for scalable development
- **Regular audits** for consistency and quality

---

*This design guideline should be treated as a living document, updated as the brand evolves and new requirements emerge.*
