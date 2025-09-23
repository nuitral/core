import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default {
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
		resolve({ extensions: ['.js', '.ts', '.tsx'] }),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		terser(),
	],
}
