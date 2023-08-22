import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://onrirr.github.io',
  base: '/portfolio' // remove when custom domain
  ,
  integrations: [tailwind()]
});