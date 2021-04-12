const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const filenames = require('gulp-filenames');
const { capitalCase } = require('change-case');

gulp.task('generateIcons', () => {
  const prepend = `/*
 * This file is auto-generated
 * manual changes will be lost
*/

/* eslint-disable */
import React from \'react\';
import createIcon from \'../createIcon\';

export default createIcon(
  <>`
  const append = `  </>
);`

  return gulp.src('./src/icons/source/**/*.svg')
      .pipe(filenames('icons'))
      .pipe(svgmin({
        js2svg: { pretty: true },
        plugins: [
          { removeDimensions: true },
          { removeXMLNS: true },
          { removeAttrs: { attrs:['fill', 'fill-rule'] } }
        ]
      }))
      .pipe(replace(/<svg[^>]*\>/gi, prepend))
      .pipe(replace('</svg>', append))
      .pipe(replace(`"`, `'`))
      .pipe(replace(`'/>`, `' />`))
      .pipe(replace('xlink:href', 'xlinkHref'))
      .pipe(replace(`<path d='M0 0h24v24H0z' />`, ''))
      .pipe(replace(`<path d='M24 0v24H0V0z' />`, ''))
      .pipe(replace(`<path d='M0 6h153v36H0z' />`, ''))
      .pipe(rename(path => { path.extname = '.tsx' }))
      .pipe(gulp.dest('./src/icons/library'));
});

gulp.task('generateIconIndex', (cb) => {
  let indexString = ''

  filenames.get('icons').forEach((line) => {
    const iconName = line.split('.')[0];
    indexString += `export { default as Icon${capitalCase(iconName).replace(/ /g, '')} } from './library/${iconName}';\n`;
  })

  require('fs').writeFileSync('src/icons/index.ts', indexString)

  cb();
});

gulp.task('default',  gulp.series('generateIcons', 'generateIconIndex'))
