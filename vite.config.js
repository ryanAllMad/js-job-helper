import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-L3IODK2Z.js?v=8b452e90', 'chunk-OHOWNLOC.js?v=8b452e90', 'chunk-POSA54WF.js?v=546d9f4d']
  },
  test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './tests/setup.js',
	},
})
