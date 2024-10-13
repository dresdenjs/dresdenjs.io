import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import lit from '@astrojs/lit';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), mdx()],
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~': resolve(__dirname, './node_modules'),
      },
    },
  },
});
