import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/combine-pdfs': 'http://localhost:8000', // Proxy requests to backend
        },
    },
});
