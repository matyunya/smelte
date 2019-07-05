import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";
import json from "rollup-plugin-json";
import config from "sapper/config/rollup.js";
import getPreprocessor from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import includePaths from "rollup-plugin-includepaths";
import path from "path";
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const postcssPlugins = (purge = false) => {
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-nesting")(),
    require("postcss-custom-properties")({
      importFrom: "./src/utils/cssVars.js"
    }),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")(),
    purge &&
      require("cssnano")({
        preset: "default"
      }),
    purge &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.svelte"],
        extractors: [
          {
            extractor: content => {
              const fromClasses = content.match(/class:[A-Za-z0-9-_]+/g) || [];

              return [
                ...(content.match(/[A-Za-z0-9-_:\/]+/g) || []),
                ...fromClasses.map(c => c.replace("class:"))
              ];
            },
            extensions: ["svelte"]
          }
        ],
        whitelist: [
          "html",
          "body",
          "ripple-gray",
          "ripple-primary",
          "ripple-white",
          "cursor-pointer",
          "navigation:hover",
          "navigation.selected",
          "outline-none",
          "text-xs",
          "transition"
        ],
        whitelistPatterns: [
          /bg-gray/,
          /text-gray/,
          /yellow-a200/,
          /language/,
          /namespace/,
          /token/,
          // These are from button examples, infer required classes.
          /(bg|ripple|text|border)-(red|teal|yellow|lime|primary)-(400|500|200|50)$/
        ]
      })
  ].filter(Boolean);
};

const preprocess = getPreprocessor({
  transformers: {
    postcss: {
      plugins: postcssPlugins()
    }
  }
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      string({
        include: "**/*.txt"
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess
      }),
      resolve(),
      commonjs(),
      includePaths({ paths: ["./src", "./"] }),

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
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, ie >= 11, not dead"
              }
            ]
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true
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
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      json(),
      svelte({
        generate: "ssr",
        dev,
        preprocess
      }),
      string({
        include: "**/*.txt"
      }),
      resolve(),
      includePaths({ paths: ["./src", "./"] }),
      commonjs(),
      postcss({
        plugins: postcssPlugins(!dev),
        extract: path.resolve(__dirname, "./static/global.css")
      })
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
