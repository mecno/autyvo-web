import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

// Lire la version depuis package.json
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))

// Obtenir __dirname en mode ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // Expose sur toutes les interfaces (0.0.0.0)
    port: 5173,
    // Désactiver le cache pour éviter les problèmes en dev
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  define: {
    // Injecter la version depuis package.json
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.js',
        'src/main.jsx',
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}',
      ],
    },
    // Optimisations pour réduire le temps d'exécution
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    // Désactiver le watch mode par défaut pour CI
    watch: false,
  },
})
