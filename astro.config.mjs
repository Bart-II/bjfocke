// @ts-check
import { defineConfig } from 'astro/config';

// Served from https://bart-ii.github.io/bjfocke/ until a custom domain is set up.
// When moving to a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://bart-ii.github.io',
  base: '/bjfocke',
  trailingSlash: 'ignore',
  build: {
    // Keep all CSS in external files so the Content-Security-Policy can forbid inline styles.
    inlineStylesheets: 'never',
  },
});
