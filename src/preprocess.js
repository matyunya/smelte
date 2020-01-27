import getPreprocessor from "svelte-preprocess";

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
  whitelist = defaultWhitelist,
  whitelistPatterns = defaultWhitelistPatterns,
  purge = false
}) => {
  const tailwindConfig = require("./tailwind.config.js")(tailwind);
  return [
    ...postcss,
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-input-range")(),
    require("autoprefixer")(),
    require("tailwindcss")(tailwindConfig),
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
        whitelist,
        whitelistPatterns
      })
  ].filter(Boolean);
};

const preprocess = config =>
  getPreprocessor({
    transformers: {
      postcss: {
        plugins: postcssProcessor(config)
      }
    }
  });

export default preprocess;
