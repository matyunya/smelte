import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";
import json from "rollup-plugin-json";
import config from "sapper/config/rollup.js";
import includePaths from "rollup-plugin-includepaths";
import alias from "rollup-plugin-alias";
import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

import { postcssProcessor as smelte } from "./rollup-plugin-smelte";

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warning.message.includes("Use of eval is strongly discouraged") ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    onwarn,
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      json({
        includes: "**./*.json"
      }),
      string({
        include: "**/*.txt"
      }),
      svelte({
        dev,
        hydratable: true,
        preprocess: !dev && sveltePreprocess({
          postcss: {
            plugins: smelte()
          },
        }),
      }),
      resolve(),
      commonjs(),
      includePaths({ paths: ["./src", "./"] }),
      alias({ smelte: "src/index.js" }),

      !legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%"
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ]
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    onwarn,
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      json({
        includes: "**./*.json"
      }),
      svelte({
        generate: "ssr",
        dev,
        preprocess: sveltePreprocess({
          postcss: {
            plugins: smelte(),
          },
        }),
      }),
      string({
        include: "**/*.txt"
      }),
      resolve(),
      alias({ smelte: "src/index.js" }),
      includePaths({ paths: ["./src", "./"] }),
      commonjs()
    ],
    external: [].concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    )
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ]
  }
};
