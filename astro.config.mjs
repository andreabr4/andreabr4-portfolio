import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import vercel from '@astro/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroI18next()
  ],
  output: 'server',
  adapter: vercel(),
});