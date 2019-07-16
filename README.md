# Smelte
<img src="https://smelte.netlify.com/logo.png" width="300" style="display: block; margin-bottom: 2rem">
[![license](https://img.shields.io/npm/l/smelte.svg)](https://img.shields.io/npm/l/smelte.svg)
[![downloads](https://img.shields.io/npm/dm/smelte.svg)](https://img.shields.io/npm/dm/smelte.svg)
[![version](https://img.shields.io/npm/v/smelte.svg)](https://img.shields.io/npm/v/smelte.svg)

[Demo](https://smelte.netlify.com/)

Smelte is a UI framework built on top of Svelte and Tailwind CSS using Material Design spec (hence the name).
It comes with many components and utility functions making it easy to build beautiful responsive layouts while keeping
bundle size and performance at check all thanks to Svelte.

### Installation
Clone the project's sapper template, install the dependencies and write some pretty code!
```
npx degit matyunya/smelte-template my-svelte-project
cd my-svelte-project
yarn && yarn dev
(or npm install && npm run dev)
```

If you don't want to use sapper you can use raw template:

```
npx degit matyunya/smelte-template#no-sapper my-svelte-project
```

### Issues

Smelte is still in very early stage, so please feel free to submit any feedback.

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
- [ ] Treeview
- [ ] Date picker

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
- [ ] Dark mode
- [ ] Other icons
- [ ] Document API
- [ ] JS ripple animation
- [ ] IE 11 support
- [ ] CDN version
