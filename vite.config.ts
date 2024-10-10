import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from'dotenv';
import svgr from 'vite-plugin-svgr'

dotenv.config();

export default defineConfig({
  plugins: [react(), svgr(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@/styles/tailwind.css";`,
      },
    },
  },
});
