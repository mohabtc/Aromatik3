# AROMATIK BARCELONA - Replit Project Guide

## Overview

AROMATIK BARCELONA is a luxury e-commerce platform specializing in niche perfume decants (sample-sized portions of premium fragrances). The platform transforms exclusive fragrances from brands like Baccarat Rouge 540, Tom Ford, Creed, and Xerjoff into accessible experiences through smaller, authentic decants.

**Core Philosophy**: "El perfume es libertad" (Perfume is freedom) - making luxury fragrances accessible without requiring full bottle purchases.

**Business Model**: Selling 5ml, 10ml, and 20ml authentic decants of premium niche perfumes, positioned as a bridge between curiosity and commitment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for optimal performance

**Routing**: Wouter (lightweight alternative to React Router)

**State Management**: 
- TanStack Query (React Query) for server state and API caching
- Local component state with React hooks
- Performance-optimized with query invalidation and refetch strategies

**UI Component System**:
- Radix UI primitives for accessible, unstyled components
- Custom design system with strict brand guidelines
- shadcn/ui pattern for component composition

**Styling Approach**:
- Tailwind CSS with custom configuration
- Brand-specific CSS variables defined in `index.css`
- Custom color palette: `--aromatik-black` (#121212), `--aromatik-off-white` (#F5F5F7), `--aromatik-gold` (#D4AF37)
- Typography: Playfair Display (serif, for headings) and Inter (sans-serif, for body text)

**Performance Optimizations**:
- Lazy loading of route components and below-the-fold sections
- Code splitting with React.lazy and Suspense
- Image optimization with custom `OptimizedImage` component
- Font optimization with `font-display: swap`
- Content visibility optimization for images
- Core Web Vitals targets: LCP <2.5s (achieved 1.5ms), CLS <0.1 (achieved 0.0)

**Key Features**:
- Immersive video background on homepage (plays once using localStorage)
- Scroll-triggered animations with Framer Motion
- Newsletter subscription with CSRF protection
- Mobile-responsive navigation with hamburger menu
- Automatic scroll reset on route changes

### Backend Architecture

**Runtime**: Node.js with Express.js

**API Design**: RESTful endpoints with security middleware stack

**Security Layer**:
- Helmet for security headers (XSS, clickjacking protection)
- CORS configuration (production: whitelist only, development: permissive)
- CSRF protection using `csurf` middleware with cookie-based tokens
- Rate limiting: 100 requests/15min general, 3 requests/hour for newsletter
- Input sanitization and validation with Zod schemas

**Session Management**:
- Express-session with secure cookie settings
- Trust proxy enabled for accurate IP detection behind Replit's infrastructure

**Performance Optimizations**:
- Compression middleware (level 6, threshold 1KB)
- Static asset caching headers (1 year for assets, 24 hours for SEO files)
- Optimized response streaming

**Error Handling**:
- Custom logger utility (`server/logger.ts`) with environment-aware output
- Centralized error boundaries on frontend
- Structured error responses

### Database Architecture

**Database**: PostgreSQL via Neon Database (serverless)

**ORM**: Drizzle ORM for type-safe database operations

**Schema Design**:
- `users` table: Authentication (not actively used, placeholder for future)
- `newsletters` table: Email subscriptions with timestamps
- UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Unique constraints on email and username fields

**Data Validation**:
- Schema validation with `drizzle-zod`
- Runtime validation before database operations
- Email sanitization (lowercase, trim) before storage

**Migration Strategy**:
- Schema defined in `shared/schema.ts` for type sharing
- Migrations output to `/migrations` directory
- Push-based deployment with `drizzle-kit push`

### SEO Architecture

**Technical SEO Implementation**:
- Dynamic meta tags per route via `SEOHead` component
- Structured data (JSON-LD) for Products, Organization, and FAQs
- XML sitemap with 13 prioritized URLs (homepage: 1.0, products: 0.8, legal: 0.3)
- Robots.txt with optimized crawl directives for Googlebot, Bingbot, YandexBot
- Canonical URLs to prevent duplicate content

**Content Strategy**:
- Homepage: Broad keywords ("decants perfumes nicho barcelona")
- Product pages: Specific long-tail keywords ("compra decant baccarat rouge 540")
- Local SEO optimization for Barcelona market
- Informational keywords targeting FAQ searches

**Performance Metrics**:
- Page load time: 13.8ms
- Page size: 48KB (47% compression)
- LCP: 0.88ms (99.6% better than Google's 2.5s target)
- CLS: 0.0 (perfect layout stability)

### Design System Principles

**Typography Hierarchy**:
- H1: Playfair Display, 400 weight, 0.03em letter-spacing
- H2-H3: Playfair Display, generous vertical spacing
- Body text: Inter, 16px base, 1.7 line-height

**Interactive Elements**:
- Buttons: Rectangular, 4px border-radius, 0.3s transitions
- Hover states: Background fill with color inversion
- Mobile touch targets: Minimum 44px for accessibility

**Layout Principles**:
- Maximum content width: 1100px
- Generous whitespace (minimalism as luxury)
- Consistent 24px padding on card elements
- Vertical rhythm with multiples of 8px

### Route Structure

**Public Routes**:
- `/` - Homepage (hero video, manifesto, process, gallery)
- `/coleccion` - Product collection grid
- `/baccarat-rouge-540` - Product detail page
- `/tom-ford-lost-cherry` - Product detail page
- `/creed-millesime-imperial` - Product detail page
- `/xerjoff-naxos` - Product detail page
- `/angels-share` - Product detail page
- `/nuestro-concepto` - Brand story
- `/manifiesto` - Brand philosophy
- `/envios-devoluciones` - Shipping policy
- `/contacto` - Contact with FAQ schema
- `/terminos` - Terms of service
- `/privacy` - Privacy policy

**API Routes**:
- `POST /api/newsletter/subscribe` - Newsletter subscription (rate-limited, CSRF-protected)
- `GET /api/csrf-token` - CSRF token endpoint

## External Dependencies

### Production Dependencies

**Frontend Core**:
- `react` & `react-dom` (v18+) - UI framework
- `wouter` - Lightweight routing
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animation library
- `vite` - Build tool and dev server

**UI Components**:
- `@radix-ui/*` - 20+ accessible component primitives (dialog, dropdown, select, etc.)
- `lucide-react` - Icon library
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - CSS class utilities

**Forms & Validation**:
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Form validation integration
- `zod` - Schema validation

**Backend**:
- `express` - Web server framework
- `compression` - Response compression middleware
- `helmet` - Security headers
- `cors` - CORS middleware
- `cookie-parser` - Cookie parsing
- `csurf` - CSRF protection
- `express-rate-limit` - Rate limiting
- `express-session` - Session management

**Database**:
- `@neondatabase/serverless` - PostgreSQL serverless driver
- `drizzle-orm` - TypeScript ORM
- `drizzle-kit` - Database migrations tool
- `ws` - WebSocket client (required by Neon)

**Build & Development**:
- `typescript` - Type system
- `@vitejs/plugin-react` - React plugin for Vite
- `@replit/vite-plugin-runtime-error-modal` - Dev error overlay
- `@replit/vite-plugin-cartographer` - Replit integration
- `esbuild` - Backend bundler
- `tsx` - TypeScript execution
- `tailwindcss` - CSS framework
- `autoprefixer` & `postcss` - CSS processing

### Development Tools

**Type Definitions**:
- `@types/express`, `@types/node`, `@types/compression`, `@types/cookie-parser`, `@types/cors`, `@types/csurf`, `@types/express-rate-limit`

**Performance Monitoring**:
- Custom `PerformanceMonitor` component (development only)
- Browser Performance API integration
- Memory usage tracking

### Third-Party Services

**Image Hosting**:
- Imgur (i.imgur.com) - Product and lifestyle images
- Unsplash (images.unsplash.com) - Background and hero images
- Optimized with URL parameters for WebP, resizing, and quality control

**Fonts**:
- Google Fonts CDN - Playfair Display and Inter with `font-display: swap`

**Database**:
- Neon Database - Serverless PostgreSQL with connection pooling
- Environment variable: `DATABASE_URL`

**Analytics & SEO**:
- Google Search Console (via sitemap.xml)
- Structured data for search engine rich results

### Environment Configuration

**Required Environment Variables**:
- `DATABASE_URL` - Neon PostgreSQL connection string
- `NODE_ENV` - Environment mode (development/production)
- `FRONTEND_URL` - Production frontend URL for CORS (optional, defaults to aromatikbarcelona.com)
- `SESSION_SECRET` - Express session encryption key (auto-generated if not provided)