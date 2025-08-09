import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  server: {
    port: 4321,
    host: '0.0.0.0'
  },
  devToolbar: {
    enabled: false
  }
});
