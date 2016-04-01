var gulp = require('gulp');
var coffee = require('gulp-coffee');
var config = require('../config').coffee;

gulp.task('coffee', function() {
  gulp.src(config.src)
    .pipe(coffee(config.options).on('error', function(msg) {console.log('something went wrong', msg);}))
    .pipe(gulp.dest(config.dest));
});
