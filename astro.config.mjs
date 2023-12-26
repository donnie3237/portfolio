import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
const site = "https://dose3.dxse.site";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: false,}), solidJs(), sitemap()]
});