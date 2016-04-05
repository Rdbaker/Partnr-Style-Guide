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
    .pipe(gulp.dest(config.dest));
});
