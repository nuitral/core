import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import glob from 'fast-glob'

const coreConfig = {
    input: './lib/index.ts',
    output: [
        {
            file: 'dist/core.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/core.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    external: ['lit'],
    plugins: [
        resolve({extensions: ['.js', '.ts']}),
        commonjs(),
        typescript({tsconfig: './tsconfig.json', declaration: false, declarationDir: null}),
        terser(),
    ],
}

const allComponents = glob.sync('./lib/components/**/index.ts', {absolute: false})
const components = allComponents.filter(file => !file.endsWith('components/index.ts'))

const componentConfigs = components.map(file => {
    const parts = file.split('/')
    const name = parts[parts.length - 2]
    return {
        input: file,
        output: [
            {
                dir: `dist/components/${name}`,
                format: 'esm',
                sourcemap: true,
                entryFileNames: 'index.js',
            },
            {
                dir: `dist/components/${name}`,
                format: 'cjs',
                sourcemap: true,
                entryFileNames: 'index.cjs',
            },
        ],
        external: ['lit'],
        plugins: [
            resolve({extensions: ['.js', '.ts']}),
            commonjs(),
            typescript({tsconfig: './tsconfig.json', declaration: false, declarationDir: null}),
            terser(),
        ],
    }
})

export default [
    coreConfig,
    ...componentConfigs
]
