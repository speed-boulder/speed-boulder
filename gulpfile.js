"use-strict";

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const run = require('gulp-run');

gulp.task('test', ['lint'], () => {
  run('electron-mocha app').exec();
  run('electron-mocha app/lib --renderer --recursive').exec();
});

gulp.task('lint', () => {
  return gulp.src('./app/**.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})

gulp.task('watch', () => {
  gulp.watch('./app/**.js', ['test']);
});
