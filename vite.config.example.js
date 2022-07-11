import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
    server:{
        host:"192.168.1.197", // SAME HOST WITH LARAVEL //
        port:5000 // SAME PORT WITH LARAVEL //
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
