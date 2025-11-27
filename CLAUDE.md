# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Run checks**: `pnpm run check`

## Architecture Overview

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.  The application is deployed to Vercel for production.

### Key Configuration Details

- **Path Aliases**: `@/*` maps to `./src/*`

### Project Structure

**IMPORTANT**: Keep this structure documentation updated as the project evolves.

```
src/
├── app/                           # Next.js App Router
│   ├── api/                      # API routes
│   ├── components/               # React components
│   │   └── ui/                   # shadcn/ui components
│   ├── globals.css               # Global CSS styles
│   ├── layout.tsx                # Root layout component
├── lib/                          # Shared utilities
│   ├── database.ts               # Prisma database utilities (optional)
│   └── utils.ts                  # General utility functions
└── types/                        # TypeScript definitions
    └── api.ts                    # API request/response types with Zod schemas

prisma/                           # Database schema (optional)
└── schema.prisma                 # Prisma database schema definitions

Configuration Files:
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── vercel.json                   # Vercel deployment configuration
```

**Key Files:**
- `src/types/api.ts` - All API types and Zod validation schemas
- `src/lib/database.ts` - Database connection utilities (when needed)
- `src/app/api/` - All API endpoints following Next.js App Router conventions
- `prisma/schema.prisma` - Database schema definitions (when database is needed)
- `CLAUDE.md` - Project documentation and conventions (this file)


## Code Conventions

- **API Route Documentation**: Add JSDoc comments to all API route handlers explaining purpose, parameters, and return values
- **API Types & Validation**: Define all API request/response types and Zod schemas in `src/types/api.ts` to ensure type safety and validation between frontend and backend communication
- **Authentication**: By default, use Build0's built-in authentication via `@build0.ai/core`. Call `authenticate(req)` to get the authenticated user. If the app needs independent authentication, it can implement its own system alongside Build0's authentication.
- **Database (Optional)**: When database functionality is needed, use Prisma ORM with runtime database configuration. Database connection info is provided at request time, not through environment variables. Use `src/lib/database.ts` utilities to create Prisma clients with dynamic connection strings.  
For example: `const prisma = createPrismaClient({ url: "postgresql://user:pass@host:5432/db" });`
- **Component Documentation**: Document complex components and their props
- **UI Components**: Avoid building new UI components if shadcn/ui can be used.  They are found in `src/app/components/ui`.

## HISTORY

History can be viewed at @./HISTORY.md
DO NOT modify it.  It will be automatically updated.