# AROMATIK BARCELONA - Project Documentation

## Overview
AROMATIK BARCELONA is a luxury web application for selling niche perfume decants and premium brands. The brand's vision is to transform exclusive products into a personal and immediate experience, focusing on self-expression. The project aims to establish a sophisticated online presence, offering a curated selection of fragrances and a seamless user experience.

## User Preferences
- **Comunicación**: Lenguaje simple y cotidiano, sin tecnicismos
- **Idioma principal**: Español
- **Filosofía de marca**: Minimalismo sensorial, lujo inteligente (acceso, libertad, experiencia)
- **Voz de marca**: Confiada, culta, ligeramente rebelde

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **UI Components**: Radix UI primitives

### Backend
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express-session
- **API**: RESTful endpoints
- **Performance**: Compression, caching headers

### Design System
- **Typography**: Playfair Display (titles), Inter (paragraphs)
- **Colors**: `--aromatik-black` (#121212), `--aromatik-off-white` (#F5F5F7), `--aromatik-gold` (#D4AF37)
- **Buttons**: Rectangular, 4px border-radius, smooth transitions
- **Layout**: Generous white space, `max-width: 1100px` container

### Key Features
- **Pages**: Homepage, individual product pages (e.g., Baccarat Rouge 540), institutional pages (`/coleccion`, `/nuestro-concepto`, `/manifiesto`, `/envios-devoluciones`, `/contacto`, `/liderazgo`)
- **Functionality**: Newsletter subscription, optimized navigation, lazy loading, performance monitoring.
- **SEO**: Comprehensive SEO strategy including dynamic meta tags, structured data (Product, Organization, FAQ Schema), optimized URLs, and keyword research.
- **Performance**: Core Web Vitals optimized (LCP 1.5ms), image and font optimization, compression, and cache headers.

## External Dependencies

### Production
- **Frontend**: React, React DOM, Wouter, TanStack Query, Framer Motion
- **UI**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Backend**: Express, Drizzle ORM, compression
- **Database**: Neon Database (PostgreSQL)
- **Forms**: React Hook Form, Zod validation

### Development
- **Build**: Vite, TypeScript, esbuild
- **Database**: Drizzle Kit