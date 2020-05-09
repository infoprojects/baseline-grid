# Baseline grid

## Getting started

```
>  yarn
>  gulp
```

## Gulp tasks

* `gulp` - run both tasks `views` and `css`
* `gulp views` - compile pug files into html files
* `gulp css` - compile scss files into css files

## Simple example

```pug
.grid-wrapper.wrapper_15
  .grid-container.container_15
    .grid-zone.grid_15
      - for (var x = 1; x <= 5; x++)
        .grid-blok.grid_3
          .grid-element
            .grid-edge
              p blok grid_3
```

## Config properties

Listed below are all options, with their defaults

```scss
$baseline-default: (
  viewports: (
    (alias: "small", max: 480px, columns: 3, fluid: false, override-container: 0px),
    (alias: "medium", min: 481px, max: 768px, columns: 6, fluid: false, override-container: 0px),
    (alias: "large", min: 769px, columns: 12, fluid: false, override-container: 0px)
  ),
  zones: (
    (columns: 12, blocks: (12, 9, 6, 3))
  ),
  column-width: 80px,
  grid-mq-small: 480px,
  grid-mq-medium: 768px,
  columns-small: 3,
  columns-medium: 6,
  columns-large: 12,
  pushes: (),
  pulls: (),
  container-gutter: null,
  gutter: 0,
  outer-padding: 5px,
  inner-padding: 5px,
  debug-color: false
);

```
Viewports: settings to configurate viewport small/medium/large.
You can also configurate all viewports with one setting.
Dont forget the `comma` after the map because otherwise you get a error in the `map-has-key` function.

For example:
```scss
$baseline-config: (
  viewports: (
    (alias: "all", max: 1023px, columns: 12, fluid: true, override-container: 0px),
  ),
  ...
)
```

max: max-width.
min: min-width.
columns: total columns.
fluid: if this setting is true, the screen size changes, the proportion of elements will stay the same. The container and wrapper width will be 100%.
override-container: if set, the container width will be overwritten.
Zones: for which zones do you need the grid sizes to be calculated
Per zone: for which blocks do you need the grid sizes to be calculated.
Column-width: the absolute size of one column. In a 12-columns grid with a column size of 80px, the total width of the container will be 960px;
Grid-mq-small: media query setting for a small viewport.
Grid-mq-medium: media query setting for a medium viewport.
Columns-small: the total columns in a small viewport.
Columns-medium: the total columns in a medium viewport.
Columns-large: the total columns in a large viewport.
Pushes and pulls: the setting to push and pull the grid to the right or left. For example:
```pug
.grid-wrapper.wrapper_12
  .grid-container.container_12
    .grid-zone.grid_12
      each column in [12]
        include includes/grid-blok
    .grid-zone.grid_9.push_3
      each column in [3, 3, 3, { prefix: 2, column: 5, suffix: 2 }, 6, 3, 3, 6, 9 ]
        include includes/grid-blok
    .grid-zone.grid_3.pull_9
      each column in [3, 3, 3, 3, 3]
        include includes/grid-blok
```
The grid-zone grid_9 will be pushed 3 columns to the right with push_3. And the grid-zone grid_3 will be pulled 9 columns to the left with pull_9. Therefore, in the large viewport you can switch grid-zone grid_9 and grid-zone grid_3 from their places. And because the push and pull setting can only be applied in a large viewport, as soon as the viewport changes to medium, these grids will switch places again. So with the pushes and pulls settings you can visibly manipulate the dom.
gutter: the space between the columns.
container-gutter: if set, the total px will be added to the max-width for the grid-wrapper.
gutter: the total px to calculate the width of a grid-blok. For example if the gutter is set to 0 the width of a grid-blok will be 100%, if the gutter is 7.5, the width will be calculated with calc(100% - 15px). The gutter is the empty space between element's.
outer-padding: padding left and right for grid-element.
inner-padding: padding left and right for grid-title and grid-inside.

## How to create your grid

* Create a scss file
* Define your config
* Import "mixins/baseline-loader"

### Example:

```scss
$baseline-config: (
  zones: (
    (columns: 12, blocks: (12, 9, 6, 3)),
    (columns: 9, blocks: (9, 6, 3)),
    (columns: 6, blocks: (6, 3)),
    (columns: 3, blocks: (3))
  ),
  column-width: 100px,
  gutter: 0,
  outer-padding: 10px,
  inner-padding: 10px
);

@import "mixins/baseline-loader";
```
