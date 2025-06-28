# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Run checks**: `pnpm run check`

## Architecture Overview

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.  The application is deployed to Vercel for production.

### Key Configuration Details

- **Path Aliases**: `@/*` maps to `./src/*`

### Project Structure

- **API Routes**: Located in `src/app/api/`
- **Pages**: App Router pages in `src/app/`
- **Shared Libraries**: Common utilities in `src/lib/`
- **Styling**: Global CSS in `src/app/globals.css`, Tailwind configured via PostCSS

### Cron jobs

Cron jobs are run on Vercel and can be configured via `vercel.json`.  For example:

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "crons": [
    {
      "path": "/api/hello",
      "schedule": "0 5 * * *"
    }
  ]
}
```

The crons property is an array of cron jobs. Each cron job has two properties:
* The path, which must start with /
* The schedule property, which must be a string that represents a cron expression. In this example, the job is scheduled to execute every day at 5:00 am UTC


## Code Conventions

- **API Route Documentation**: Add JSDoc comments to all API route handlers explaining purpose, parameters, and return values
- **Schema Validation**: Use Zod schemas for validating request bodies, query parameters, and URL parameters in API routes
- **Component Documentation**: Document complex components and their props
- **UI Components**: Use shadcn/ui for frontend components when building user interfaces.  They are found in `src/app/components/ui`.

## HISTORY

History can be viewed at @./HISTORY.md
DO NOT modify it.  It will be automatically updated.