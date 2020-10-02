import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: 'src/init.ts',
    output: {
      esModule: false,
      file: `./cdn/init.min.${pkg.version}.js`,
      format: 'iife',
      name: pkg.name,
      exports: 'named',
      extend: true,
      strict: false,
    },
    plugins: [typescript(), json(), terser()],
  },
  {
    input: 'src/banner.ts',
    output: {
      esModule: false,
      file: `./cdn/banner.min.${pkg.version}.js`,
      format: 'iife',
      name: pkg.name,
      exports: 'named',
      extend: true,
      strict: false,
    },
    plugins: [typescript(), terser()],
  },
];
