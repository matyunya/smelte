const postcss = require("rollup-plugin-postcss");
const path = require("path");
const extractor = require("./src/utils/css-extractor.js");

const defaultWhitelist = ["html", "body", "stroke-primary", "mode-dark"];

const defaultWhitelistPatterns = [
  // for JS ripple
  /ripple/,
  // date picker
  /w\-.\/7/
];

const postcssProcessor = ({
  tailwind = {},
  postcss = [],
  whitelist = [],
  whitelistPatterns = [],
  purge = false
}) => {
  const tailwindConfig = require("./tailwind.config.js")(tailwind);
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-input-range")(),
    require("autoprefixer")(),
    require("tailwindcss")(tailwindConfig),
    ...postcss,
    purge &&
      require("cssnano")({
        preset: "default"
      }),
    purge &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.svelte"],
        extractors: [
          {
            extractor,
            extensions: ["svelte"]
          }
        ],
        whitelist: [whitelist, ...defaultWhitelist],
        whitelistPatterns: [defaultWhitelistPatterns, ...whitelistPatterns]
      })
  ].filter(Boolean);
};

const plugins = config => postcssProcessor(config || {});

export default config =>
  postcss({
    plugins: plugins(config),
    extract: path.resolve(__dirname, config.output || "./static/global.css")
  });
