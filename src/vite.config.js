import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: true,
        hostname: '0.0.0.0',
        // cors: true,
        // hmr: {
        //     host: '192.168.0.111'
        // }
    },
       



    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
