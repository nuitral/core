import {defineConfig} from 'vite';
import {resolve} from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    root: resolve(__dirname, './'),
    plugins: [tsconfigPaths({ projects: ['./tsconfig.demo.json'] })],
});
