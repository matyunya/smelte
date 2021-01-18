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
  whitelist = defaultWhitelist,
  whitelistPatterns = defaultWhitelistPatterns,
  whitelistPatternsChildren = defaultWhitelistPatterns,
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
        whitelist: whitelist.filter(Boolean),
        whitelistPatterns: whitelistPatterns.filter(Boolean),
        whitelistPatternsChildren: whitelistPatternsChildren.filter(Boolean)
      })
  ].filter(Boolean);
};

function moveGlobalCssToStatic({ dir, file }, output) {
  let directory;
  if (dir && !file) { // single file asset
    directory = dir;
  } else if (!dir && file) { // chunks
    directory = path.dirname(file);
  }

  if (directory === path.dirname(output)) {
    return;
  }

  const fs = require('fs')
  const cssFile = path.basename(output)
  if (fs.existsSync(path.resolve(directory, cssFile))) {
    fs.copyFileSync(path.resolve(directory, cssFile), path.resolve(output))
    fs.unlinkSync(path.resolve(directory, cssFile))
  
    console.log(
      `rollup-plugin-smelte: 
        moved ${cssFile} 
        from ${path.resolve(directory, cssFile)} 
        to ${path.resolve(output)}`
    )
  }
}

const plugins = config => postcssProcessor(config || {});

module.exports = (config = {}) =>
{
  const defaultOutput = "./static/global.css"
  const pcss = postcss({
    plugins: plugins(config),
    extract: path.basename(config.output || defaultOutput)
  });

  // since rollup v2 we can't extract css outside of the defined output, so to keep the impact to this
  // plugin minimal I injected some code to the "writeBundle" method (which should be called after "generateBundle")
  // to move the global.css file located under rollup.config.js's rollup.output to config parameter's output

  const old_writeBundle = pcss.writeBundle
  pcss.writeBundle = function() {
    if (old_writeBundle) {
      old_writeBundle.apply(this, arguments)
    }
    // arguments[0]: OutputOptions
    moveGlobalCssToStatic(arguments[0], config.output || defaultOutput)
  }

  return pcss;
}
