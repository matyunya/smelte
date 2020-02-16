# Smelte

[![Smelte logo](http://smeltejs.com/logo-192.png)](https://smeltejs.com/)

[![license](https://img.shields.io/npm/l/smelte.svg)](https://img.shields.io/npm/l/smelte.svg)
[![downloads](https://img.shields.io/npm/dm/smelte.svg)](https://img.shields.io/npm/dm/smelte.svg)
[![version](https://img.shields.io/npm/v/smelte.svg)](https://img.shields.io/npm/v/smelte.svg)
[![Discord Chat](https://img.shields.io/discord/671589733356535818.svg)](https://discord.gg/)

[Demo](http://smeltejs.com/)

Smelte is a UI framework built on top of Svelte and Tailwind CSS using Material Design spec (hence the name).
It comes with many components and utility functions making it easy to build beautiful responsive layouts while keeping
bundle size and performance at check all thanks to Svelte.

### Installation

To get you started you need to add Smelte to your dependencies with your favorite package manager

```
$ npm install smelte or yarn add smelte
```

Then you need to add Smelte Rollup plugin (Webpack is on its way).

```js
const smelte = require("smelte/rollup-plugin-smelte");

plugins = [
  ...your plugins,
  smelte({
    purge: production,
    output: "public/global.css", // it defaults to static/global.css which is probably what you expect in Sapper
    postcss: [], // Your PostCSS plugins
    whitelist: [], // Array of classnames whitelisted from purging
    whitelistPatterns: [], // Same as above, but list of regexes
    tailwind: {
      theme: {
        extend: {
          spacing: {
            72: "18rem",
            84: "21rem",
            96: "24rem"
          }
        }
      }, // Extend Tailwind theme
      colors: {
        primary: "#b027b0",
        secondary: "#009688",
        error: "#f44336",
        success: "#4caf50",
        alert: "#ff9800",
        blue: "#2196f3",
        dark: "#212121"
      }, // Object of colors to generate a palette from, and then all the utility classes
      darkMode: true,
    }, // Any other props will be applied on top of default Smelte tailwind.config.js
  }),
]
```

Then you should add Tailwind utilites CSS in your app component.

```js
import "smelte/src/tailwind.css";
```

You might also need to include material icons in your template's <head> if you use any:

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Or ship them along with Roboto if you would like to use default material font

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap"
  rel="stylesheet"
/>
```

And you're good to go and have all the Tailwind CSS power all to yourself!

For treeshaking to work it is recommended to import each component on its own like this:

```js
import Button from "smelte/src/components/Button";
import Treeview from "smelte/src/components/Treeview";
```

### Components

- [x] Text field
- [x] Button
- [x] Select
- [x] Checkbox
- [x] Radio
- [x] List
- [x] Chip
- [x] Menu
- [x] Navigation drawer
- [x] Snackbar
- [x] Dialog
- [x] Card
- [x] Slider
- [x] Proper customization via class props
- [x] Data table
- [x] Autocomplete
- [x] Tooltip
- [x] Revise events (on:change, on:focus, on:input...)
- [x] Treeview
- [x] Date picker
- [ ] Form
- [ ] Stepper
- [ ] Upload
- [ ] Rating
- [ ] Pagination
- [ ] Breadcrumbs

### Features

- [x] Default typography per Material design spec
- [x] Material icons
- [x] CSS ripple animation
- [x] Image lazy loading
- [x] Now SSR deployment
- [x] Color palette generator
- [x] Improve Purge CSS
- [x] Theming
- [x] Image processing (done [here](https://github.com/matyunya/svelte-image))
- [x] Svelte template (without Sapper)
- [x] JS ripple animation
- [x] Dark mode
- [ ] IE 11 support
