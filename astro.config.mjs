import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://asahium.github.io',
  base: '/AIBlock',
  output: 'static',
  build: {
    assets: 'assets'
  }
});

