# Smelte
[Demo](https://smelte.matyunya.now.sh)

Smelte is a UI framework built on top of Svelte and Tailwind CSS using Material Design spec (hence the name).
It comes with many components and utility functions making it easy to build beautiful responsive layouts while keeping
bundle size and performance at check all thanks to Svelte.

### Installation
Clone the project, install the dependencies and write some pretty code!
```
npx degit matyunya/smelte my-svelte-project
cd my-svelte-project
yarn && yarn dev
(or npm install && npm run dev)
```


### Deployment to now
Smelte comes preconfigured to work with [now.sh](https://now.sh) SSR build deployment.
Configuration is located at `./now.json`.
```
$ yarn now
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
- [ ] Autocomplete (sort of there but buggy)
- [ ] Slider
- [ ] Tooltip
- [ ] Revise events (on:change, on:focus, on:input...)
- [ ] Proper customization

### Features
- [x] Default typography per Material design spec
- [x] Material icons
- [x] CSS ripple animation
- [x] Image lazy loading
- [x] Now SSR deployment
- [x] Color palette generator
- [ ] Theming
- [ ] Dark mode
- [ ] Svelte template (without Sapper)
- [ ] Other icons
- [ ] JS ripple animation
- [ ] IE 11 support
- [ ] Image processing (minification and such, similar to (this)[https://www.gatsbyjs.org/packages/gatsby-image/])
- [ ] Scaffoldable CLI version
