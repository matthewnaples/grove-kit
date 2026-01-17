# The Grove Test App

This is a test Next.js application for testing component installation from the-grove CLI locally.

## Purpose

This app allows you to test component installation without publishing to npm. It's a real Next.js project where you can see how components integrate.

## Usage

### 1. Set up local development (one-time)

From the repository root:

```bash
npm run dev:link
```

### 2. Test component installation

From this directory (`apps/test-app`):

```bash
# Install a component
the-grove add async-button

# Install with overwrite
the-grove add async-button --overwrite

# List available components
the-grove list
```

Or from the repository root:

```bash
cd apps/test-app
node ../../packages/cli/dist/index.js add async-button
```

### 3. View installed components

Components are installed to:
- `src/components/ui/` - Component files
- `src/lib/utils.ts` - Utility functions (auto-created by shadcn)

### 4. Run the app (optional)

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What's Pre-configured

This app comes with:
- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with shadcn theme
- ✅ `components.json` for shadcn
- ✅ Path aliases (`@/` imports)
- ✅ `lib/utils.ts` with `cn()` helper

## Testing Workflow

1. Make changes to CLI code in `packages/cli/src/`
2. Rebuild: `npm run build` (or use watch mode: `cd packages/cli && npm run dev`)
3. Test installation here: `the-grove add <component>`
4. Check that files are created correctly in `src/components/ui/`
5. Optionally run `npm run dev` to see components in action

## Git Ignored

The following are ignored to keep the repo clean:
- `src/components/` - Installed components
- `src/lib/` - Utility files (except pre-configured utils.ts)
- `components.json` - Shadcn config (tracked for now, might change)
