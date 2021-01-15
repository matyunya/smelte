import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";
import json from "rollup-plugin-json";
import config from "sapper/config/rollup.js";
import includePaths from "rollup-plugin-includepaths";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const smelte = require("./rollup-plugin-smelte");

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
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
        hydratable: true
      }),
      !dev && smelte(),
      resolve({
				browser: true,
				dedupe: ['svelte']
			}),
      commonjs(),
      includePaths({ paths: ["./src", "./"] }),

      !legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          babelHelpers: "runtime",
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread",
            ['@babel/plugin-transform-runtime', {
              useESModules: true
            }]
          ],
        }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          babelHelpers: "runtime",
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%"
              }
            ]
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-transform-runtime', {
              useESModules: true
            }]
          ],
          babelHelpers: "runtime"
        }),

      !dev &&
        terser({
          module: true
        })
    ],
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: {...config.server.output(), exports: 'default'},
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
        dev
      }),
      smelte({
        purge: !dev,
        tailwind: {
          theme: {
            extend: {
              spacing: {
                72: "18rem",
                84: "21rem",
                96: "24rem"
              }
            }
          }
        },
        whitelistPatterns: [
          // for Prismjs code highlighting
          /language/,
          /namespace/,
          /token/,
          // for JS ripple
          /ripple/,
          // date picker
          /w\-.\/7/
        ]
      }),
      string({
        include: "**/*.txt"
      }),
      resolve({
				dedupe: ['svelte']
			}),
      includePaths({ paths: ["./src", "./"] }),
      commonjs({ sourceMap: false })
    ],
    external: [].concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),
    preserveEntrySignatures: 'strict',
    onwarn,
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
    ],
    preserveEntrySignatures: false,
		onwarn,
  }
};
