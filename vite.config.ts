import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import webExtension, { readJsonFile } from "vite-plugin-web-extension"
import { resolve } from "node:path"

function generateManifest() {
  const manifest = readJsonFile("./manifest.json")
  const pkg = readJsonFile("./package.json")
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: generateManifest,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
