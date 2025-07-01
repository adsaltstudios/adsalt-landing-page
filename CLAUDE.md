# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Adsalt Studios' landing page - a React/TypeScript application built with Vite, shadcn/ui, and Tailwind CSS. The site targets small business owners, demonstrating how AI tools can help them save time, reduce costs, and grow their businesses.

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (useful for debugging)
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

### Core Stack
- **React 18.3.1** with TypeScript - Main framework
- **Vite** - Build tool and dev server with SWC compiler
- **shadcn/ui** - Complete component library (40+ components)
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching (prepared for future API integration)

### Project Structure
```
src/
├── components/
│   ├── sections/     # Landing page sections (Hero, Products, About, etc.)
│   └── ui/          # shadcn/ui component library
├── hooks/           # Custom React hooks (scroll animation, mobile detection)
├── lib/            # Utility functions
├── pages/          # Route components (Index, NotFound)
├── main.tsx        # Application entry point
├── App.tsx         # Main app with providers
└── index.css       # Global styles and CSS variables
```

### Key Sections Architecture
The landing page follows a modular section-based architecture:
- Header (navigation with smooth scroll)
- Hero (main value proposition)
- Problem (business pain points)
- Products (AI tools and training offerings)
- About (company values and mission)
- SocialProof (testimonials)
- CTA (Calendly integration and email capture)
- Footer

### Component Patterns
- Each section is a self-contained component
- Uses custom hooks for shared logic (scroll animations, mobile detection)
- Minimal state management appropriate for a landing page
- Design system implemented through CSS custom properties and Tailwind utilities

## Brand Guidelines

### Voice & Tone
- **Plainspoken** - No jargon, talk like a real person
- **Warm and direct** - Kind but clear, respect people's time
- **Helpful, not salesy** - Teach first, let results do the selling
- **Confident, not cocky** - Say what you know simply

### Color Palette
- Primary: `#305A72` (dusty steel blue)
- Secondary: `#E9ECEF` (light stone gray)
- Accent 1: `#A4B9C7` (soft denim)
- Accent 2: `#D9B6A3` (soft clay)
- Support: `#7D9BA6` (slate blue-gray)
- Tertiary: `#D7EAFB` (airy sky blue)
- Text: `#1E1E1E` (rich charcoal)

### Typography
- Headings: Inter (clean, modern structure)
- Body: Inter/Open Sans (highly readable)
- CTA Buttons: Inter Bold (clear and accessible)

## Important Configuration

### Path Aliases
- `@/` maps to `src/` directory (configured in tsconfig.json and vite.config.ts)

### Key Dependencies
- **Radix UI** - Extensive collection of headless UI primitives
- **Lucide React** - Icon library
- **React Hook Form** + Zod - Form handling and validation
- **next-themes** - Theme switching support
- **Sonner** - Toast notifications

## Development Notes

### Current Status
- Landing page is production-ready for static deployment
- Email form currently logs to console (needs backend integration)
- No testing framework configured
- Designed for Lovable platform integration

### Known Limitations
- Email capture form needs backend integration
- No analytics integration
- Missing error boundaries
- No automated testing setup

### Design Philosophy
Balance emotion and clarity:
- Function must serve story
- Microinteractions should feel alive
- Animations should be soft and intentional
- Use whitespace to create calm
- Design for local business owners discovering AI

### Code Style
- Follow existing TypeScript and React patterns
- Use shadcn/ui components consistently
- Maintain responsive design patterns with Tailwind
- Keep components focused and modular
- Follow the established design system tokens

## Integration Points

### External Services
- **Calendly** - Booking integration in CTA section
- **Lovable Platform** - Development and deployment platform

### Future Enhancements
- Backend integration for email capture
- Analytics implementation
- Error boundary implementation
- Testing framework setup (Jest, React Testing Library recommended)
- Performance monitoring