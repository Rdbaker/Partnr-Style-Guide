var gulp = require('gulp');
var coffeeify = require('gulp-coffeeify');
var config = require('../config').coffee;

gulp.task('coffee', function() {
  gulp.src(config.src)
    .pipe(coffeeify({
      options: {
        debug : true,
      }
    }))
    .pipe(gulp.dest(config.dest));/*
  gulp.src(config.src)
    .pipe(coffee(config.options).on('error', function(msg) {console.log('something went wrong', msg);}))
    .pipe(gulp.dest(config.dest));*/
});
