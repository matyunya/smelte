# Smelte changelog

# 0.1.18
* Refactor out Label component

# 0.1.17
* Dispatch select on any tree view item
* Bump waypoint

# 0.1.16
* Propagate treeview events in nested items
* Add persistent prop to dialogs

# 0.1.15
* Refactor navigation drawer
* Export breakpoints store, add breakpoints page

# 0.1.13
* Remove unused PostCSS config section
* Add code examples to sliders and selection controls
* Remove `@apply` where possible
* Remove `extend` from tailwind config
* Put tailwind utilities import after `@apply` classes
* Fix setting font size class to icon

# 0.1.11
* Fix drawer docs

# 0.1.10
* Supress sapper warning messages

# 0.1.8
* Fix ripple on fab buttons and chips on mobile

# 0.1.7
* Fix ripple div not getting removed after animation

# 0.1.6
* Add/replace/remove to chips
* Add anchor to buttons

# 0.1.5
* Fix jerkiness in expanding treeview
* Add code example to treeview

# 0.1.4
* Fix treeview
* Add notSelectedColor prop to icon

# 0.1.3
* Update dependencies
* Fix pagination in the data table

# 0.1.2
* Upgrade svelte
* Fix bugs from upgrading svelte
* Empty select item

# 0.1.0
* Start API docs
* Expose tailwind config
* Add colors to chips
* More consistent API
* New props for data tables
* Split docs components (props table and code)

# 0.0.29
* Better transparent variants
* JS ripple animation
* Yet better treeview
* PurgeCSS preserve default component styles and styles from *Classes props

# 0.0.28
* Add transparent variant to all colors
* Give ripple elements transparent hover
* Fix outlined button hover
* Add class builder to snackbars
* Add position and color props to snackbar
* Expose transition props on snackbars

# 0.0.27
* Add alias plugin
* Remove postcss nesting

# 0.0.26
* Passing escaped props to text fields and buttons

# 0.0.25
* Fix class builder calls on wrapper/append/prepend in text field

# 0.0.24
* Expose text field classes in select
* Improve custom select example

# 0.0.23
* Add example with custom multiselect
* Few refactoring fixes

## 0.0.22
* Fix styles on the data table
* Refactor style function props to accept strings,
  eg. `<Button outlinedClasses="bg-transparent border border-solid text-green-500">` means the same as
  `<Button outlinedClasses={c => c + " text-green-500">`

## 0.0.20
* Fix icons absolute position

## 0.0.19
* Remove Code from default export
* Move tailwind elevation to deps

## 0.0.18
* Move tinycolor2 to dependencies

## 0.0.17
* Fix dependencies

## 0.0.16
* Add fonts search bar example
* Fix focused select color
* Rename `c` class prop to `class`

## 0.0.15
* Fix purgecss settings

## 0.0.12
* Add tooltip
* Add horizontal scroll to table

## 0.0.11
* Finish autocomplete
* Add focus events to selects
* Fix scrim height
* Mobile table view
* Finish table footer

## 0.0.10
* Fix nav drawer on mobile

## 0.0.9
* Expose more classes
* Publish components to npm

## 0.0.8
* Make svelte usable without sapper
* Create svelte template without sapper
* Color stying fixes
* Add pagination to table
* Improve animations and component customizations

## 0.0.7
* Improve data table styles, add sorting
* Remove color prop from icon to use parent text color
* Fix navbars scroll behavior
* Add add/remove classes prop to buttons

## 0.0.6
* Class builder for adding/removing classes dynamically
* Rewrite buttons and text fields to use class builder
* Expose most classes
* Disabled slider styling
* Color customization and slots for selects and radios
* Improve animations
* Automatic purge css preprocessor

## 0.0.5
* Basic data tables
* `navigation` prop for tabs to hide on mobile
* Fixed navigation drawer scrolling
* Ugraded svelte to finally fix Waypoint detached issue, hence using component Waypoint again
* Added changelog
* Add light/dark variants to buttons
* Refactor buttons to make all classes customizable