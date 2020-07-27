import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const commonPlugins = () => [
  resolve({
    extensions: ['.ts', '.js'],
    resolveOnly: [/^@porsche-design-system\/.*$/]
  }),
  typescript()
];

export default [
  {
    input: 'src/index.ts',
    output: {
      esModule: false,
      dir: 'dist',
      format: 'umd',
      name: pkg.name,
      exports: 'named'
    },
    plugins: [
      ...commonPlugins(),
      json(),
      terser()
    ]
  }
];
