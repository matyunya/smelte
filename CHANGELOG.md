# Smelte changelog

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