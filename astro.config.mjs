import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({
      include: ['**/*.tsx', '**/*.ts'],
      experimentalReactChildren: true,
    }),
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
  },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process': '{}',
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
  }
});
