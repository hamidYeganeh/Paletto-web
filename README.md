# Paletto Web - Monorepo

A Turborepo monorepo containing the Paletto Web application suite.

## Applications

This monorepo contains two main applications:

### 1. Website (`apps/website`)
- **Port**: 3000
- **Description**: The main public website for Paletto Web
- **Run Command**: `npm run dev` (runs all apps) or `npm run dev --filter=website`

### 2. Admin Panel (`apps/panel`)
- **Port**: 3001
- **Description**: The admin panel for managing Paletto Web
- **Run Command**: `npm run dev` (runs all apps) or `npm run dev --filter=panel`

## Shared Packages

- **`packages/ui`**: Shared React components
- **`packages/eslint-config`**: Shared ESLint configuration
- **`packages/typescript-config`**: Shared TypeScript configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all applications in development mode:
   ```bash
   npm run dev
   ```

3. Build all applications:
   ```bash
   npm run build
   ```

4. Run linting:
   ```bash
   npm run lint
   ```

## Development

- The website runs on http://localhost:3000
- The admin panel runs on http://localhost:3001
- Both applications share components from the `packages/ui` library
- TypeScript configurations are shared across all packages

## Architecture

This monorepo uses:
- **Turborepo** for build orchestration and caching
- **Next.js** for both applications
- **TypeScript** for type safety
- **Tailwind CSS** for styling (can be added)
- **ESLint** for code linting

## Scripts

- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications and packages
- `npm run lint` - Run ESLint on all packages
- `npm run check-types` - Run TypeScript type checking
- `npm run format` - Format code with Prettier