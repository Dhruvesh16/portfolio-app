# Replit Project Guide

## Overview

This is a full-stack web application built for showcasing Dhruvesh's professional portfolio as a cybersecurity professional and full-stack developer. The application serves as both a personal portfolio and a platform to promote VaultSpec, a cybersecurity organization focused on developing security tools and applications.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom cybersecurity-themed colors
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **API**: RESTful endpoints for contact form and message management

### Development Setup
- **Environment**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Database Migrations**: Drizzle Kit for schema management
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contact Messages Table**: Stores contact form submissions with timestamp
- **Schema Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve contact messages (admin functionality)

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Professional introduction with animated elements
- **About Section**: Professional background and VaultSpec information
- **Skills Section**: Categorized skill showcase (Security, Development, Tools)
- **Projects Section**: Featured projects with technology tags
- **Contact Section**: Contact form with real-time validation and submission

### UI/UX Features
- **Dark Theme**: Cybersecurity-inspired dark theme with custom colors
- **Responsive Design**: Mobile-first responsive layout
- **Animations**: Smooth transitions and hover effects
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback for form submissions

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Communication**: Frontend makes HTTP requests to Express backend
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Operations**: Drizzle ORM handles PostgreSQL operations
5. **Response Handling**: Results sent back to frontend with appropriate status codes
6. **UI Updates**: TanStack Query manages cache and UI state updates

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm and drizzle-zod for database operations
- **Forms**: react-hook-form with @hookform/resolvers for form management
- **Validation**: zod for schema validation
- **HTTP Client**: Built-in fetch API for server communication
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Development Dependencies
- **Build Tools**: Vite, esbuild, tsx for development and production builds
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Vite handles asset optimization and bundling

### Production Configuration
- **Port**: Application runs on port 5000 (mapped to external port 80)
- **Environment**: NODE_ENV=production for optimized builds
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Serving**: Express serves built frontend assets in production

### Replit Deployment
- **Autoscale**: Configured for automatic scaling
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Development**: `npm run dev` with hot reload

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```