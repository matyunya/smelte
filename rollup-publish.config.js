// import path from "path";
import analyze from "rollup-plugin-analyzer";
import bundleSize from "rollup-plugin-bundle-size";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import getPreprocessor from "svelte-preprocess";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

const { name } = pkg;

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      name
    },
    {
      file: pkg.main,
      format: "umd",
      sourcemap: true,
      name
    }
  ],
  plugins: [
    svelte({
      dev: !production,
      emitCss: true,
      hydratable: true,
      preprocess: getPreprocessor({
        transformers: {
          postcss: {
            plugins: require("./postcss.config.js")(false)
          }
        }
      })
    }),
    postcss({
      plugins: require("./postcss.config.js")(false)
    }),
    resolve(),
    commonjs(),
    production && terser(),
    production && analyze(),
    production && bundleSize()
  ]
};
