import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
const site = "https://dxse.site";
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: false,}), solidJs(), sitemap()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});