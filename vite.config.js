import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			containers: '/src/containers',
			services: '/src/services',
			store: '/src/store',
			utils: '/src/utils'
		}
	}
})
