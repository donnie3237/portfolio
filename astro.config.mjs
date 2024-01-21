import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
const site = "https://dxse.site";
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   }
  // }),
  integrations: [tailwind({ applyBaseStyles: false,}), solidJs(), sitemap()],
});