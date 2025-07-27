# replit.md

## Overview

This is a personal portfolio website for Kalla Nithin, an aspiring software engineer. The application is built as a full-stack web application with a React frontend and Express backend, featuring a modern design with shadcn/ui components and Tailwind CSS styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state, React hooks for local state
- **Theme Support**: Light/dark mode with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL sessions with connect-pg-simple

### Database Architecture
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with type-safe queries
- **Migrations**: Drizzle Kit for schema management
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend

## Key Components

### Frontend Components
- **Portfolio Page**: Main landing page with all sections
- **Hero Section**: Animated introduction with typing effect
- **About Section**: Personal information and skills showcase
- **Projects Section**: Portfolio projects with technology tags
- **Resume Section**: Downloadable resume with highlights
- **Contact Section**: Contact form with validation
- **Navigation**: Responsive navigation with theme toggle
- **Footer**: Social links and quick navigation

### Backend Components
- **Contact API**: `/api/contact` endpoint for form submissions
- **Resume API**: `/api/resume` endpoint for resume information
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **User Management**: Basic user schema (currently unused in portfolio)

### UI Component Library
- Complete shadcn/ui component set including:
  - Form components (Button, Input, Textarea, Label)
  - Layout components (Card, Dialog, Sheet)
  - Navigation components (Accordion, Tabs)
  - Feedback components (Toast, Alert)
  - Data display components (Table, Badge)

## Data Flow

### Client-Server Communication
1. **Static Content**: Vite serves the React application
2. **API Requests**: TanStack Query manages server state
3. **Form Submissions**: Contact form posts to `/api/contact`
4. **Resume Downloads**: Resume endpoint provides file information

### Development vs Production
- **Development**: Vite dev server with HMR and Express API
- **Production**: Static files served by Express with API routes

### Error Handling
- Global error boundary in Express
- Toast notifications for user feedback
- Form validation with error states

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React icons and Font Awesome
- **Fonts**: Google Fonts (Inter) for typography
- **Development**: Replit-specific tooling for hosted environment

### Build Dependencies
- **TypeScript**: Type checking and compilation
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite HMR for frontend, tsx watch for backend
- **Database**: Drizzle push for schema synchronization

### Production Build
1. **Frontend Build**: Vite builds optimized React bundle
2. **Backend Build**: esbuild bundles Express server
3. **Static Serving**: Express serves built frontend files
4. **Database**: Migrations applied via Drizzle Kit

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-based session management
- **Asset Serving**: Vite-optimized static assets in production

### Hosting Considerations
- **Replit Integration**: Special handling for Replit development environment
- **Error Logging**: Express error middleware for debugging
- **CORS**: Express CORS configuration for API access
- **File Structure**: Monorepo structure with shared types