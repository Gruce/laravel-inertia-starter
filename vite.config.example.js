import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
    server:{
        host:"127.0.0.1", // SAME HOST WITH LARAVEL //
        port:8000 // SAME PORT WITH LARAVEL //
    },
    plugins: [
        AutoImport({
            imports: ['vue'],
            dirs: [
                './resources/js/Layouts',
            ],
            vueTemplate: true,
        }),
        laravel({
            input: 'resources/js/app.js',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
