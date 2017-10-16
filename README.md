# Baseline grid

## Prerequisites

* `nodejs`, `npm`

## Getting started

```
>  Use npm install
>  Use gulp (to run 'build-sass' and 'views' tasks)
```

## Simple example
Use `gulp views` in your terminal to compile your pug files into html files

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

You can easily change your settings. 
Use `gulp build-sass` to compile your scss files into css files

```scss
$baseline-impl: (
  grid-mq-small: 539px,
  grid-mq-medium: 1039px,
  columns-large: 15,
  columns-medium: 6,
  columns-small: 3,
  wrapper-width: 1120px,
  grid-zones: (15, 12, 9, 6, 3),
);
```
