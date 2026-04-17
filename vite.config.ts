import {defineConfig} from 'vite';
import path, {resolve} from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({mode}) => {
    const isDev = mode === 'dev';
    const alias = {
        '@nuitral/types': path.resolve(__dirname, '../types/lib'),
    }
    return {
        root: resolve(__dirname, './demo'),
        plugins: [tsconfigPaths({projects: isDev ? ['../tsconfig.json'] : ['../tsconfig.demo.json']})],
        resolve: {
            alias: isDev ? alias : undefined,
        },
        server: {
            fs: {
                allow: ['..'],
            },
        },
        optimizeDeps: {
            exclude: [
                '@nuitral/types',
            ],
        },
    }
})
