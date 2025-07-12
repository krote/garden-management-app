# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build the production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a **Garden Management Application** built with Next.js 15 App Router. The application helps users manage their gardens by tracking areas, plots, plants, and work logs.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: AWS Cognito (via aws-amplify)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Headless UI, Lucide React icons
- **Charts**: Recharts
- **File Upload**: React Dropzone

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── calendar/          # Calendar-related components
│   ├── dashboard/         # Dashboard components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and configurations
│   ├── api/               # API client utilities
│   ├── auth/              # AWS Cognito configuration
│   ├── utils/             # General utilities
│   └── validations/       # Zod schemas
├── hooks/                 # Custom React hooks
├── stores/                # Zustand state stores
├── types/                 # TypeScript type definitions
└── aws/                   # AWS configuration files
```

### Key Domain Models

The application manages a hierarchical garden structure:

1. **User** - Garden owner with preferences and privacy settings
2. **Area** - Physical garden areas with geometry and soil conditions
3. **Plot** - Subdivisions within areas for specific crops
4. **Garden** - Active plantings with growth tracking
5. **WorkLog** - Daily activities and maintenance records
6. **PlantCategory** - Crop types with growing requirements

### Authentication
- Uses AWS Cognito for user authentication
- Configuration in `src/lib/auth/cognito.ts`
- Environment variables required:
  - `NEXT_PUBLIC_AWS_REGION`
  - `NEXT_PUBLIC_AWS_USER_POOL_ID`
  - `NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID`

### Data Management
- TanStack Query for server state management
- Zustand for client state management
- AWS infrastructure with DynamoDB tables (see `src/aws/` for configs)

### Code Quality
- ESLint with Next.js and Prettier configurations
- Husky and lint-staged for pre-commit hooks
- TypeScript strict mode enabled