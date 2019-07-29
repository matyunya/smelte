const extractor = require("./src/utils/css-extractor.js");

module.exports = (purge = false) => {
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-input-range")(),
    require("autoprefixer")(),
    require("tailwindcss")("./tailwind.config.js"),
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
        whitelist: ["html", "body", "stroke-primary"],
        whitelistPatterns: [
          // for Prismjs code highlighting
          /language/,
          /namespace/,
          /token/,
          // for JS ripple
          /ripple/
        ]
      })
  ].filter(Boolean);
};
