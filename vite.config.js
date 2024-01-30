import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/global.css',
                'resources/css/app.css',

                'resources/js/app.js',
                'resources/js/math/algebra.js',
            ],
            refresh: true,
        }),
    ],
});
