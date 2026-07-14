import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'world-creation': resolve(__dirname, 'world-creation.html'),
        'world-graph': resolve(__dirname, 'world-graph.html'),
        'entity-editor': resolve(__dirname, 'entity-editor.html'),
        timeline: resolve(__dirname, 'timeline.html'),
        discovery: resolve(__dirname, 'discovery.html'),
        export: resolve(__dirname, 'export.html'),
        analytics: resolve(__dirname, 'analytics.html'),
        lore: resolve(__dirname, 'lore.html'),
        settings: resolve(__dirname, 'settings.html'),
        'sign-in': resolve(__dirname, 'sign-in.html'),
        'create-account': resolve(__dirname, 'create-account.html'),
      },
    },
  },
});
