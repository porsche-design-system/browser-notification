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
    input: 'src/init.ts',
    output: {
      esModule: false,
      file: `./build-cdn/init.min.${pkg.version}.js`,
      format: 'umd',
      name: pkg.name,
      exports: 'named'
    },
    plugins: [
      ...commonPlugins(),
      json(),
      terser()
    ]
  },
  {
    input: 'src/notification-banner.ts',
    output: {
      esModule: false,
      file: `./build-cdn/notification-banner.min.${pkg.version}.js`,
      format: 'umd',
      name: pkg.name,
      exports: 'named'
    },
    plugins: [
      ...commonPlugins(),
      terser()
    ]
  }
];
