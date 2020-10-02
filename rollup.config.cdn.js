import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const outputConfig = {
  esModule: false,
  format: 'iife',
  exports: 'named',
  strict: false,
};

export default [
  {
    input: 'src/init.ts',
    output: {
      ...outputConfig,
      file: `./cdn/init.min.${pkg.version}.js`,
    },
    plugins: [typescript(), json(), terser()],
  },
  {
    input: 'src/init-banner.ts',
    output: {
      ...outputConfig,
      file: `./cdn/init-banner.min.${pkg.version}.js`,
    },
    plugins: [typescript(), json(), terser()],
  },
  {
    input: 'src/init-overlay.ts',
    output: {
      ...outputConfig,
      file: `./cdn/init-overlay.min.${pkg.version}.js`,
    },
    plugins: [typescript(), json(), terser()],
  },
  {
    input: 'src/overlay.ts',
    output: {
      ...outputConfig,
      file: `./cdn/overlay.min.${pkg.version}.js`,
    },
    plugins: [typescript(), terser()],
  },
];
