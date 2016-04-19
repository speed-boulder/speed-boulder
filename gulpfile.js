"use-strict";

const gulp = require('gulp');
const electronMocha = require('gulp-electron-mocha');

gulp.task('test', => {
  gulp.src('./app/**.mocha.js', {read: false})
    .pipe(electronMocha({
      electronMocha: {
        renderer:true
      }
    }))
})

gulp.task('watch', => {
  gulp.watch('./app/**.js', ['test']);
})
