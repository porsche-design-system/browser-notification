import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      esModule: false,
      dir: 'dist',
      format: 'umd',
      name: pkg.name,
      exports: 'named',
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'dist/types',
      }),
      json(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'esm',
    },
    plugins: [typescript(), json()],
  },
];
