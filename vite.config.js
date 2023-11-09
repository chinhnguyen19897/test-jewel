import { defineConfig } from 'vite'

export default defineConfig({
    publicDir: true,
    root: './',
    build: {
        // outDir,
        outDir: 'dist',
        minify: true,
        minifySyntax: false,
        minifyIdentifiers: false,
        rollupOptions: {
            input: {
                main: 'src/index.ts'
            },

            output: {
                entryFileNames: 'bundle.js',
            }
        }
    }
})
