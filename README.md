# Baseline grid

## Prerequisites

* `nodejs`, `npm`

## Getting started

```
>  npm install
>  gulp
```

## Gulp tasks

* `gulp` - run both tasks `views` and `build-sass`
* `gulp views` - compile pug files into html files
* `gulp build-sass` - compile scss files into css files

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
$baseline-config: (
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
  gutter: 0,
  outer-padding: 5px,
  inner-padding: 5px,
  debug-color: false
);
```

Zones: for which zones do you need the grid sizes to be calculated
Per zone: for which blocks do you need the grid sizes to be calculated
Column-width: the absolute size of one column. In a 12-columns grid with a column size of 80px, the total width of the container will be 960px;
TODO : explain other options...

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
