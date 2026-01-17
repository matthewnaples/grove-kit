#!/usr/bin/env node

// Wrapper package that forwards to @the-grove/cli
// This allows users to run "npx the-grove" instead of "npx @the-grove/cli"

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Forward to the actual CLI package
require('@the-grove/cli/dist/index.js');
