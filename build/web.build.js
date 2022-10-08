import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import glsl from 'rollup-plugin-glsl';

const config = {
  input: 'src/web/index.ts',
  output: [
    {
      file: 'public/index.js',
      format: 'iife',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: false,
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    glsl({
      include: 'src/**/*.glsl'
    }),
    serve({
      open: true,
      contentBase: 'public/',
      port: 5500,
      verbose: false,
    }),
    livereload({
      watch: ['public'],
      verbose: false,
    })
  ]
};

export default config;
