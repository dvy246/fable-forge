import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? new URL(configuredSite).origin : undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
