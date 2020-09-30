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
      format: 'umd',
      name: pkg.name,
      exports: 'named',
    },
    plugins: [typescript(), json(), terser()],
  },
  {
    input: 'src/notification-banner.ts',
    output: {
      esModule: false,
      file: `./cdn/notification-banner.min.${pkg.version}.js`,
      format: 'umd',
      name: pkg.name,
      exports: 'named',
    },
    plugins: [typescript(), terser()],
  },
];
