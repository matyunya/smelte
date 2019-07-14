import analyze from "rollup-plugin-analyzer";
import autoPreprocess from "svelte-preprocess";
import bundleSize from "rollup-plugin-bundle-size";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
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
      hydratable: true,

      preprocess: autoPreprocess({
        postcss: {
          plugins: require("./postcss.config.js")(true)
        }
      })
    }),
    resolve(),
    commonjs(),
    production && terser(),
    production && analyze(),
    production && bundleSize()
  ]
};
